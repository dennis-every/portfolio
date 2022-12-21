const form = document.getElementById('contact-form');
const { email } = form.elements;
const alert = document.getElementById('alert');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    form.submit();
    email.textContent = '';
  } else {
    alert.classList.replace('d-none', 'd-flex');
    alert.textContent = 'Email must be lowercase - form not submitted!';
  }
});
