// Get the modal, the login button and the username input
const loginBtn = document.getElementById("username-login");
const usernameInput = document.getElementById("username");
const closeLoginBtn = document.getElementById("closeLoginBtn");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const signupPassword = document.getElementById("signupPassword");
const signUpusername = document.getElementById("signUpusername");
const signupConfirmPassword = document.getElementById("signupConfirmPassword");
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
// Validate username
usernameInput.addEventListener("input", function () {
  if (usernameInput.value.length >= 3) {
    usernameInput.setCustomValidity("");
  } else {
    usernameInput.setCustomValidity(
      "Username must be at least 3 characters long"
    );
  }
});
// Validate password

signupPassword.addEventListener("input", function () {
  if (signupPassword.value.length >= 8) {
    let upperCaseLetters = /[A-Z]/g;
    if (signupPassword.value.match(upperCaseLetters)) {
      let uppercaseCount = signupPassword.value.match(upperCaseLetters).length;
      if (uppercaseCount >= 2) {
        signupPassword.setCustomValidity("");
        // Check if the password and confirm password match
        if (signupPassword.value === signupConfirmPassword.value) {
          signupConfirmPassword.setCustomValidity("");
        } else {
          signupConfirmPassword.setCustomValidity(
            "Password and confirm password must match"
          );
        }
      } else {
        signupPassword.setCustomValidity(
          "Password must contain at least 2 uppercase characters"
        );
      }
    } else {
      signupPassword.setCustomValidity(
        "Password must contain at least 2 uppercase characters"
      );
    }
  } else {
    signupPassword.setCustomValidity(
      "Password must be at least 8 characters long"
    );
  }
});

signupConfirmPassword.addEventListener("input", function () {
  // Check if the password and confirm password match
  if (signupPassword.value === signupConfirmPassword.value) {
    signupConfirmPassword.setCustomValidity("");
  } else {
    signupConfirmPassword.setCustomValidity(
      "Password and confirm password must match"
    );
  }
});

document.forms[1].addEventListener("submit", (event) => {
  event.preventDefault();
  // Check if both password and confirm password are valid
  if (signupPassword.validity.valid && signupConfirmPassword.validity.valid) {
    loginBtn.innerHTML = "Welcome " + signUpusername.VA;
    document.getElementById("signupModal").style.display = "none";

    closeSignupBtn.click();
  }
});

document.getElementById("signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  loginBtn.innerHTML = "Welcome " + signUpusername.value;
  document.getElementById("username-signup").style.display = "none";

  document.getElementById("username-signup").style.display = "none";
});

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("username-signup").style.display = "none";
  });
