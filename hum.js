
const hamburger = document.querySelector(".hamburger");
const navLinks = document.getElementById("navLinks");


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
