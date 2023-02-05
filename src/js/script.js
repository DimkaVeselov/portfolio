window.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.menu');
	const close = document.querySelector('.menu__close');
	const overlay = document.querySelector('.menu__overlay');

	burger.addEventListener('click', () => {
		menu.classList.add('active');
	});

	close.addEventListener('click', () => {
		menu.classList.remove('active');
	});

	overlay.addEventListener('click', () => {
		menu.classList.remove('active');
	});

	const counters = document.querySelectorAll('.skills__ratings-counter');
	const lines = document.querySelectorAll('.skills__ratings-line span');

	counters.forEach((item, i) => {
		lines[i].style.width = item.innerHTML;
	});
});
