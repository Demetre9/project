// Get the modal and the login button
const username = document.getElementById("username");
const usernameInput = document.getElementById("usernameInput");
const closeBtn = document.getElementById("closeBtn");

// Show the modal when the user clicks on the "Login" button
username.addEventListener("click", () => {
  document.getElementById("myModal").style.display = "block";
});

// Close the modal when the user clicks on the "x" button
closeBtn.addEventListener("click", () => {
  document.getElementById("myModal").style.display = "none";
});

// When the form is submitted, update the text on the page to show the username
document.forms[0].addEventListener("submit", (event) => {
  event.preventDefault();
  username.innerHTML = "Welcome " + usernameInput.value;
  document.getElementById("myModal").style.display = "none";
});
