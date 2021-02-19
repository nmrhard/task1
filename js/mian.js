'use strict'

const navEl = document.querySelector('.nav');
const btnClose = navEl.querySelector('.button--close');

const closeNav = function(evt) {
    navEl.classList.remove('nav--opened');
    navEl.classList.add('nav--closed');

    evt.stopPropagation();
    btnClose.removeEventListener('click', closeNav);
}

const openNav = function() {
    if (navEl.classList.contains('nav--closed')) {
        navEl.classList.remove('nav--closed');
        navEl.classList.add('nav--opened');

        btnClose.addEventListener('click', closeNav);
    }
}

navEl.addEventListener('click', openNav);
