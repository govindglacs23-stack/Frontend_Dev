(function(){
  const input = document.getElementById('table-search');
  const table = document.getElementById('student-table');
  const nores = document.getElementById('no-results');
  input && input.addEventListener('input', function(){
    const q = input.value.trim().toLowerCase();
    let found = false;
    const rows = table ? Array.from(table.tBodies[0].rows) : [];
    rows.forEach(r=>{
      const text = r.textContent.toLowerCase();
      const ok = text.includes(q);
      r.style.display = ok ? '' : 'none';
      if(ok) found = true;
    });
    if(nores) nores.style.display = found ? 'none' : '';
  });
})();
