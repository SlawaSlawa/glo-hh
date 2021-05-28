'use strict';

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const closeMenuButton = document.querySelector('.close-button');

menuButton.addEventListener('click', (evt) => {
	evt.preventDefault();
	menu.classList.add('is-open');
});

closeMenuButton.addEventListener('click', (evt) => {
	evt.preventDefault();
	menu.classList.remove('is-open');
});
