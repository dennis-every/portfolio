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

// Validation for contact form
const form = document.getElementById('contact-form');
const { email } = form.elements;
const alert = document.getElementById('alert');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    form.submit();
    form.reset();
  } else {
    alert.classList.replace('d-none', 'd-flex');
    alert.textContent = 'Email must be lowercase - form not submitted!';
  }
});

// Use local storage to store contact form data
const contactForm = document.getElementById('contact--form');
const {
  name: nameInput,
  email: emailInput,
  message: messageInput,
} = contactForm.elements;

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      // everything except Firefox
      && (e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage
      && storage.length !== 0
    );
  }
}

let availableStorage;

if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness
  availableStorage = window.localStorage;
} else {
  // Too bad, no localStorage for us
  availableStorage = null;
}

const formData = {};

function storeData() {
  formData.name = nameInput.value;
  formData.email = emailInput.value;
  formData.message = messageInput.value;
  const jsonData = JSON.stringify(formData);
  availableStorage.setItem('contactFormData', jsonData);
}

nameInput.addEventListener('change', () => {
  storeData();
});

emailInput.addEventListener('change', () => {
  storeData();
});

messageInput.addEventListener('change', () => {
  storeData();
});

function retrieveData() {
  const data = availableStorage.getItem('contactFormData');
  const parseData = JSON.parse(data);
  if (data?.length > 0) {
    const { name, email, message } = parseData;
    nameInput.value = name || '';
    emailInput.value = email || '';
    messageInput.value = message || '';
  }
}

window.onload = () => {
  retrieveData();
};

const btnReset = document.getElementById('contact--form-btn-reset');

btnReset.addEventListener('click', (event) => {
  event.preventDefault();
  contactForm.reset();
  availableStorage.clear();
});
