const menuBars = document.getElementById('menu-bars');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileLinks = document.getElementById('mobile-links');

function openMenuHandler() {
  mobileMenu.classList.replace('d-none', 'd-flex');
}

function closeMenuHandler() {
  mobileMenu.classList.replace('d-flex', 'd-none');
}

menuBars.addEventListener('click', openMenuHandler);
closeMenuBtn.addEventListener('click', closeMenuHandler);
mobileLinks.addEventListener('click', closeMenuHandler);
