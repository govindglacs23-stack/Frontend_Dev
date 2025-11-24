(function(){
  const themeBtns = document.querySelectorAll('[data-theme]');
  themeBtns.forEach(b=> b.addEventListener('click', function(){
    const t = b.getAttribute('data-theme');
    document.body.setAttribute('data-theme', t);
    document.body.className = t;
  }));
})();