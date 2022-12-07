var toggle = function() {
    var hide = document.getElementById('hidden');
    var lesson = document.getElementById('buttons');
    if (hide.style.display === 'block' || hide.style.display === '') {
        hide.style.display = 'none';
        lesson.style.display = 'block';
    } else {
      hide.style.display = 'block';
      lesson.style.display = 'none';
    }
}