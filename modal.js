// Get the modal and the login button
var modal = document.getElementById("myModal");
var btn = document.getElementById("loginBtn");

// Get the close button in the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the login button is clicked, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the close button is clicked, close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When anywhere outside the modal is clicked, close the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
