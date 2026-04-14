window.addEventListener("DOMContentLoaded", () => {
  const books = document.querySelectorAll(".book");
  const aboutText = document.querySelector(".about-text");
  const aboutImg = document.querySelector(".about-image img");

  // Animate about section
  setTimeout(() => {
    aboutText.classList.add("show");
    aboutImg.classList.add("show");
  }, 200);

  // Animate books (staggered)
  books.forEach((book, index) => {
    book.classList.add("animate");

    setTimeout(() => {
      book.classList.add("show");
    }, index * 150 + 300);
  });
});