'use strict'

const modal = document.querySelector('.modal-cont');
const modalBtn = document.querySelectorAll('.modal-btn');
const closeBtn = document.querySelector('.close-btn')

const closeModal = function() {
    modal.classList.add('hidden')
}

for (let i = 0; i < modalBtn.length; i++) {
  modalBtn[i].addEventListener('click', () => {
    modal.classList.remove('hidden')
  });

  closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
      closeModal()
    }
  })
}