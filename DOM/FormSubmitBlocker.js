(function(){
  const form = document.getElementById('validate-form');
  if(!form) return;
  const nameI = form.querySelector('input[name="name"]');
  const emailI = form.querySelector('input[name="email"]');
  const passI = form.querySelector('input[name="password"]');
  const success = document.getElementById('success-msg');
  function validateField(el){
    const v = (el.value || '').trim();
    if(el === nameI) return v.length>0;
    if(el === emailI) return v.includes('@');
    if(el === passI) return v.length>=6;
    return true;
  }
  function showError(el, msg){
    let sp = el.nextElementSibling;
    if(!sp || !sp.classList.contains('error-msg')){
      sp = document.createElement('div');
      sp.className = 'error-msg';
      el.parentNode.insertBefore(sp, el.nextSibling);
    }
    sp.textContent = msg;
  }
  function clearError(el){
    const sp = el.nextElementSibling;
    if(sp && sp.classList.contains('error-msg')) sp.remove();
  }
  form.addEventListener('submit', function(e){
    e.preventDefault();
    let ok = true;
    if(!validateField(nameI)){ showError(nameI, 'Name required'); ok=false; } else clearError(nameI);
    if(!validateField(emailI)){ showError(emailI, 'Valid email required'); ok=false; } else clearError(emailI);
    if(!validateField(passI)){ showError(passI, 'Password min 6 chars'); ok=false; } else clearError(passI);
    if(ok){
      if(success) success.textContent = 'Form Submitted Successfully';
      form.reset();
    } else {
      if(success) success.textContent = '';
    }
  });
  [nameI,emailI,passI].forEach(el=>{
    el && el.addEventListener('input', function(){
      if(validateField(el)) clearError(el);
    });
  });
})();