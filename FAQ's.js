document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector("h3");
    const answer = item.querySelector("p");

    question.addEventListener("click", function() {
      // Toggle the visibility of the answer when the question is clicked
      answer.classList.toggle("visible");
    });
  });
});

    