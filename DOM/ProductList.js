(function(){
  const input = document.getElementById('product-input');
  const addBtn = document.getElementById('add-product');
  const list = document.getElementById('product-list');
  addBtn && addBtn.addEventListener('click', function(){
    const v = (input.value || '').trim();
    if(!v) return;
    const li = document.createElement('li');
    li.className = 'product-item';
    li.innerHTML = `<span class="text">${escapeHtml(v)}</span> <button class="edit">Edit</button> <button class="delete">Delete</button>`;
    list.appendChild(li);
    input.value = '';
  });
  list && list.addEventListener('click', function(e){
    const t = e.target;
    if(t.classList.contains('delete')){
      const li = t.closest('li');
      li && li.remove();
    } else if(t.classList.contains('edit')){
      const li = t.closest('li');
      if(!li) return;
      const span = li.querySelector('.text');
      const txt = span.textContent;
      const inputInline = document.createElement('input');
      inputInline.value = txt;
      inputInline.className = 'inline-edit';
      span.replaceWith(inputInline);
      inputInline.focus();
      function save(){
        const newText = (inputInline.value || '').trim();
        const newSpan = document.createElement('span');
        newSpan.className = 'text';
        newSpan.textContent = newText || txt;
        inputInline.replaceWith(newSpan);
        document.removeEventListener('click', outsideClick);
      }
      function outsideClick(ev){
        if(!li.contains(ev.target)) save();
      }
      inputInline.addEventListener('keydown', function(ev){
        if(ev.key === 'Enter') save();
        if(ev.key === 'Escape'){
          const newSpan = document.createElement('span');
          newSpan.className = 'text';
          newSpan.textContent = txt;
          inputInline.replaceWith(newSpan);
          document.removeEventListener('click', outsideClick);
        }
      });
      document.addEventListener('click', outsideClick);
    }
  });
  function escapeHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
})();