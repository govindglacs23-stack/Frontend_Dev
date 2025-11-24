(function(){
  const ta = document.getElementById('char-textarea');
  const counter = document.getElementById('char-count');
  const reset = document.getElementById('reset-btn');
  const MAX = 100;
  ta && ta.addEventListener('keydown', function(e){
    const v = ta.value;
    if(v.length >= MAX && !['Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){
      e.preventDefault();
      return false;
    }
  });
  ta && ta.addEventListener('input', function(){
    const rem = MAX - ta.value.length;
    if(counter) counter.textContent = rem;
    if(rem <= 0) counter.style.color = 'red';
    else if(rem <= 20) counter.style.color = 'yellow';
    else counter.style.color = '';
  });
  reset && reset.addEventListener('click', function(){
    if(ta) ta.value = '';
    if(counter) counter.textContent = MAX;
    if(counter) counter.style.color = '';
  });
})();