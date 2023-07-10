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
