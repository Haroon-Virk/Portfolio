let users = []; // Array to store user data

// Check if user data exists in local storage and load it
const storedUsers = localStorage.getItem('users');
if (storedUsers) {
  users = JSON.parse(storedUsers);
}

// Function to register a new user
function registerUser() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if the email is already registered
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    alert('User with this email already exists.');
    return;
  }

  // Add the new user to the array
  users.push({ name, email, password });

  // Save the updated user data to local storage
  localStorage.setItem('users', JSON.stringify(users));

  // Clear the registration form
  document.getElementById('form').reset();

  alert('Registration successful! You can now log in.');
}

// Function to log in a user
function loginUser() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Find the user by email
  const user = users.find((user) => user.email === email);

  if (user && user.password === password) {
    alert('Login successful!');
  } else {
    alert('Invalid email or password. Please try again.');
  }

  // Clear the login form
  document.getElementById('form').reset();
}
