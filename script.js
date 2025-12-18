// 🍔 Hamburguesa
const navbarToggle = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.navbar__menu');

navbarToggle.addEventListener('click', () => {
  const isOpen = navbarToggle.getAttribute('aria-expanded') === 'true';
  navbarToggle.setAttribute('aria-expanded', !isOpen);
  menu.classList.toggle('active');
});


// 🌙☀️ Modo oscuro
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("img");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  themeIcon.src = document.body.classList.contains("dark-mode")
    ? "icons/sun.svg"
    : "icons/moon.svg";
});
