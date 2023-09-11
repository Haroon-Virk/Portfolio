// Retrieve existing signup data from Local Storage
let signupData = JSON.parse(localStorage.getItem('signupData')) || [];

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);

    // Convert form data to an object
    const newSignup = Object.fromEntries(fd);

    // Add the new signup data to the array
    signupData.push(newSignup);

    // Save the updated array back to Local Storage
    localStorage.setItem('signupData', JSON.stringify(signupData));

    // Clear the form fields or perform any other necessary actions
    form.reset();
  });

  // Your login functionality here...
});
