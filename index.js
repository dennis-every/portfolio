/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');

  const toggleButton = document.getElementById('toggleDarkMode');

  if (document.body.classList.contains('dark-mode')) {
    toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    toggleButton.innerHTML = '<i class="fa-regular fa-sun"></i>';
  }
};

particlesJS.load('particles-js', 'assets/particles.json');

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
