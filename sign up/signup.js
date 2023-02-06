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

password.addEventListener("input", function () {
  if (password.value.length >= 6) {
    let upperCaseLetters = /[A-Z]/g;
    if (password.value.match(upperCaseLetters)) {
      let uppercaseCount = password.value.match(upperCaseLetters).length;
      if (uppercaseCount >= 2) {
        password.setCustomValidity("");
        document.forms[1].addEventListener("submit", (event) => {
          event.preventDefault();
          loginBtn.innerHTML = "Welcome " + signupUsername.value;
          document.getElementById("signupModal").style.display = "none";
          closeSignupBtn.click();
        });
      } else {
        password.setCustomValidity(
          "Password must contain at least 2 uppercase characters"
        );
      }
    } else {
      password.setCustomValidity(
        "Password must contain at least 2 uppercase characters"
      );
    }
  } else {
    password.setCustomValidity("Password must be at least 6 characters long");
  }
});

// // When the form is submitted, update the text on the page to show the username
// document.forms[1].addEventListener("submit", (event) => {
//   event.preventDefault();
//   const signupUsername = document.getElementById("signup-username").value;
//   document.getElementById("username-signup").innerHTML = signupUsername;
// });

// When the form is submitted, update the text of the "Login" button to show the username
document.getElementById("signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  loginBtn.innerHTML = "Welcome " + usernameInput.value;
  document.getElementById("loginModal").style.display = "none";

  document.getElementById("signupModall").style.display = "none";
});
