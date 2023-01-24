const menuIcon = document.getElementById('menu-bars');
const mobileMenu = document.getElementById('mobileMenu');

function openMenuHandler() {
	mobileMenu.classList.replace('d-none', 'd-flex');
}

menuIcon.addEventListener('click', openMenuHandler);

const closeMenu = document.getElementById('closeMenu');

function closeMenuHandler() {
	mobileMenu.classList.replace('d-flex', 'd-none');
}

closeMenu.addEventListener('click', closeMenuHandler);

const mobileLinks = document.getElementById('mobile-links');
mobileLinks.addEventListener('click', closeMenuHandler);
