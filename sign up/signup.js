const username = document.getElementById("username");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

// Validate username
username.addEventListener("input", function () {
  if (username.value.length >= 3) {
    username.setCustomValidity("");
  } else {
    username.setCustomValidity("Username must be at least 3 characters long");
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

submitBtn.addEventListener("click", function () {
  if (username.checkValidity() && password.checkValidity()) {
    alert("Form Submitted Successfully!");
    window.location.replace("index.html");
  }
});
