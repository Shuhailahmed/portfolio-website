// Optional: Add scroll effect on navbar
window.addEventListener("scroll", () => {
  const navbar = document.getElementById('navbar');
  navbar.style.boxShadow = window.scrollY > 30 ? "0 3px 10px rgba(0,0,0,0.2)" : "none";
});
