(function(){
  const toggles = document.querySelectorAll('.dropdown-toggle-custom');
  toggles.forEach(toggle=>{
    const container = toggle.closest('.custom-dropdown');
    const options = container.querySelector('.dropdown-options');
    toggle.addEventListener('click', function(e){
      e.stopPropagation();
      options.style.display = options.style.display === 'block' ? 'none' : 'block';
    });
    options.querySelectorAll('button').forEach(opt=>{
      opt.addEventListener('click', function(e){
        toggle.textContent = opt.textContent;
        options.style.display = 'none';
      });
    });
  });
  document.addEventListener('click', function(e){
    document.querySelectorAll('.dropdown-options').forEach(o=> o.style.display = 'none');
  }, true);
})();