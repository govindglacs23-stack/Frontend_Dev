(function(){
  const steps = Array.from(document.querySelectorAll('.step'));
  let idx = 0;
  const nextBtns = Array.from(document.querySelectorAll('.next-step'));
  const backBtns = Array.from(document.querySelectorAll('.back-step'));
  const summary = document.getElementById('summary');
  function show(i){
    steps.forEach((s,si)=> s.style.display = si===i ? 'block' : 'none');
  }
  show(idx);
  nextBtns.forEach(btn=> btn.addEventListener('click', function(){
    const parent = btn.closest('.step');
    const input = parent && parent.querySelector('input');
    if(input && !input.checkValidity()){
      input.reportValidity();
      return;
    }
    if(idx < steps.length-1) idx++;
    else idx = steps.length-1;
    if(idx === steps.length-1){
      const vals = {};
      document.querySelectorAll('.step input').forEach(i=> vals[i.name||i.id]=i.value);
      if(summary) summary.textContent = JSON.stringify(vals);
    }
    show(idx);
  }));
  backBtns.forEach(btn=> btn.addEventListener('click', function(){
    if(idx>0) idx--;
    show(idx);
  }));
})();