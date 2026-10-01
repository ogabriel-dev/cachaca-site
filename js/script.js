// Menu mobile
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const closeMenu = () => {
  menu.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
};
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
menu
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", closeMenu));

// Sombra do header ao rolar
const header = document.querySelector(".site-header");
addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", scrollY > 30),
  { passive: true },
);

// Fade-in ao entrar na tela
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 },
  );
  items.forEach((el) => io.observe(el));
} else items.forEach((el) => el.classList.add("in"));
