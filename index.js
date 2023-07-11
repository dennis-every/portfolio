/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');

  const toggleButton = document.getElementById('toggleDarkMode');

  if (document.body.classList.contains('dark-mode')) {
    toggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
};

particlesJS.load('particles-js', 'assets/particles.json');

// ================== Menu ==================

const menuIcon = document.getElementById('menu');
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

menuIcon.addEventListener('click', openMenuHandler);
closeMenuBtn.addEventListener('click', closeMenuHandler);
mobileLinks.addEventListener('click', closeMenuHandler);

// ================== Menu ==================

// Make navigaiton links active when scrolling to the corresponding section
// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-link');
// Add event listeners to each link
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
// Add event listener to track scroll position
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  // Check each section's position and add active class to the corresponding link
  navLinks.forEach((link) => {
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const sectionTop = targetSection.offsetTop;
    const sectionHeight = targetSection.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Set the height of all the skill divs to the maximum height
// Get all the skill divs
const skillDivs = document.querySelectorAll('.about--skill');
// Initialize a variable to store the maximum height
let maxHeight = 0;
// Loop through each skill div and find the maximum height
skillDivs.forEach((div) => {
  const height = div.clientHeight;
  if (height > maxHeight) {
    maxHeight = height;
  }
});
// Set the maximum height to all the skill divs
skillDivs.forEach((div) => {
  div.style.height = `${maxHeight}px`;
});
