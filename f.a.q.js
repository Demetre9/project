const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((faqItem) => {
  faqItem.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});
