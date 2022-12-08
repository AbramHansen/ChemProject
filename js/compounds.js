async function loadCompounds() {
  let compounds = await getCompounds();
  appendCompounds(compounds);
}

async function getCompounds() {
  let response = await fetch("js/chemical_compounds.json");

  if (response.ok) {
    data = await response.json();
    return data;
  } else {
    throw Error(await response.text());
  }
}

function appendCompounds(data) {
  let compoundsContainer = document.getElementById("compounds");

  data.forEach((compound) => {
    let element = document.createElement("p");
    element.textContent = compound.commonName;
    element.classList.add("compound");
    element.addEventListener("click", findCompound);

    compoundsContainer.appendChild(element);
  });
}

async function findCompound(e) {
  document.getElementById("info-title").textContent = "Compound Info";

  let compounds = await getCompounds();

  let compound = compounds.find(
    (compound) => compound.commonName == e.target.textContent
  );

  var cid;

  try {
    cid = await getCompoundCID(compound.chemicalFormula);
    getCompoundPNG(cid);
  } catch (error) {
    let formulas = compound.chemicalFormula.split("/");
    let names = compound.commonName.split("/ ");
    let names2 = compound.commonName.split("/");

    let options = formulas.concat(names).concat(names2);

    options.forEach(async (option) => {
      let id = await getCompoundCID(option);
      cid = id;
      getCompoundPNG(cid);
    });
  }

  let infoContainer = document.getElementById("info");

  infoContainer.children.length > 1
    ? infoContainer.removeChild(infoContainer.children[1])
    : "";

  let div = document.createElement("div");
  let commonName = document.createElement("h3");
  commonName.classList.add("common-name");
  let compoundName = document.createElement("p");
  compoundName.classList.add("compound-name");
  let chemicalFormula = document.createElement("p");
  chemicalFormula.classList.add("chemical-formula");
  let uses = document.createElement("p");
  uses.classList.add("uses");

  commonName.textContent = compound.commonName;
  compoundName.innerHTML = `<strong>Compound Name</strong><br>${compound.compoundName}`;
  chemicalFormula.innerHTML = `<strong>Chemical Formula</strong><br> ${compound.chemicalFormula}`;
  uses.innerHTML = `<strong>Uses</strong><br>${compound.uses}`;

  div.appendChild(commonName);
  div.appendChild(compoundName);
  div.appendChild(chemicalFormula);
  div.appendChild(uses);

  infoContainer.appendChild(div);
}

async function getCompoundCID(formula) {
  const URL = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${formula}/cids/JSON`;

  const response = await fetch(URL);

  if (response.ok) {
    let data = await response.json();
    return data.IdentifierList.CID[0];
  } else {
    throw Error("Unable to fetch");
  }
}

async function getCompoundPNG(cid) {
  const URL = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/PNG`;

  const response = await fetch(URL);

  if (response.ok) {
    img = document.getElementById("compound-img");
    img.src = response.url;
    img.style.boxShadow = "0px 0px 3px #999";

    let minecraftMode = document.getElementById("switch").checked;
    if (minecraftMode) img.style.border = "solid 10px saddlebrown";
  } else {
    throw Error(await response.text());
  }
}

loadCompounds();
