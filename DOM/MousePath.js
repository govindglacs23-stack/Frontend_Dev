(function(){
  const box = document.getElementById('mouse-box');
  const coords = document.getElementById('coords');
  if(box){
    box.addEventListener('mousemove', function(e){
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      coords && (coords.textContent = `x:${Math.round(e.clientX)}, y:${Math.round(e.clientY)} | local x:${Math.round(x)}, y:${Math.round(y)}`);
    });
    box.addEventListener('dblclick', function(e){
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const dot = document.createElement('div');
      dot.style.position='absolute';
      dot.style.width='8px';
      dot.style.height='8px';
      dot.style.borderRadius='50%';
      dot.style.background='red';
      dot.style.left=(x-4)+'px';
      dot.style.top=(y-4)+'px';
      box.appendChild(dot);
    });
  }
})();

