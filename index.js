'use strict';

const modalBtn = document.querySelectorAll('.modal-btn');
const modal = document.querySelector('.modal-cont');
const closeBtn = document.querySelector('.close-btn');

for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', function() {
        console.log('Button clicked');
        modal.classList.remove('hidden')
    })
}