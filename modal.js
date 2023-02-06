// Get the modal, the login button and the username input
const loginBtn = document.getElementById("username-login");
const usernameInput = document.getElementById("username");
const closeLoginBtn = document.getElementById("closeLoginBtn");

// Show the login modal when the user clicks on the "Login" button
loginBtn.addEventListener("click", () => {
  document.getElementById("loginModal").style.display = "block";
});

// Close the login modal when the user clicks on the "x" button
closeLoginBtn.addEventListener("click", () => {
  document.getElementById("loginModal").style.display = "none";
});

// When the form is submitted, update the text of the "Login" button to show the username
document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  loginBtn.innerHTML = "Welcome " + usernameInput.value;
  document.getElementById("loginModal").style.display = "none";
});
// Get the signup button and modal
const signupBtn = document.getElementById("username-signup");
const signupModal = document.getElementById("signupModal");
const closeSignupBtn = document.getElementById("closeSignupBtn");

// Show the modal when the user clicks on the "Sign up" button
signupBtn.addEventListener("click", () => {
  signupModal.style.display = "block";
});

// Close the modal when the user clicks on the "x" button
closeSignupBtn.addEventListener("click", () => {
  signupModal.style.display = "none";
});

// When the form is submitted, update the text on the page to show the username
document.forms[1].addEventListener("submit", (event) => {
  event.preventDefault();
  const signupUsername = document.getElementById("signup-username").value;
  document.getElementById("username-signup").innerHTML = signupUsername;
  signupModal.style.display = "none";
});

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("username-signup").style.display = "none";
  });
