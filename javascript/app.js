const menuBars = document.getElementById('menu-bars');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileLinks = document.getElementById('mobile-links');

const preventDefaultHandler = (e) => {
  e.preventDefault();
};

const openMenuHandler = () => {
  mobileMenu.classList.replace('d-none', 'd-flex');
  document.body.classList.add('stop-scrolling');
  document.body.addEventListener('touchmove', preventDefaultHandler);
};

function closeMenuHandler() {
  mobileMenu.classList.replace('d-flex', 'd-none');
  document.body.classList.remove('stop-scrolling');
  document.body.removeEventListener('touchmove', preventDefaultHandler);
}

menuBars.addEventListener('click', openMenuHandler);
closeMenuBtn.addEventListener('click', closeMenuHandler);
mobileLinks.addEventListener('click', closeMenuHandler);
