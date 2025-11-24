(function(){
  const imgs = document.querySelectorAll('.gallery-img');
  const modal = document.getElementById('img-modal');
  const modalImg = document.getElementById('modal-img');
  const modalContent = document.getElementById('modal-content');
  imgs.forEach(img=> img.addEventListener('click', function(e){
    if(!modal) return;
    modal.style.display = 'block';
    modalImg.src = img.dataset.large || img.src;
  }));
  modal && modal.addEventListener('click', function(){
    modal.style.display = 'none';
  });
  modalContent && modalContent.addEventListener('click', function(e){
    e.stopPropagation();
  });
})();