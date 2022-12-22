// get form elements ✅
// check local storage available ✅
// - if available : create local storage object ✅
// - if not: null ✅
// create a single object for the data ✅
// listen to change on input fields ✅
// stringify that data
// set the object to local
// on loads of page
// - if available:
// - if local storage has data: put data into fiels
// if not: nothing
// - if not: null
//! create a reset button that reset the input fields and delete data in local storage

const contactForm = document.getElementById('contact-form');
const {name, email: emailInput, message} = contactForm.elements

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
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
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

let formData;

name.addEventListener('change', (event) => {
  console.log(event)
})
emailInput.addEventListener('change', (event) => {
  console.log(event)
})
message.addEventListener('change', (event) => {
  console.log(event)
})