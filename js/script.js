//  Splash Screen Code
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  // Set the logo
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    //  a lil animation to fade in
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("acitve");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);
    //  removing the black background to reveal the homepage
    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});

// updating the year in the footer

const currentYear = document.querySelector(".year");
const updatedYear = new Date().getFullYear();
currentYear.textContent = updatedYear;

// menu
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

btn.addEventListener("click", navToggle);

document.onclick = function (e) {
  if (e.target.id !== "menu-btn" && e.target.id !== "menu") {
    btn.classList.toggle("open");
    nav.classList.toggle("hidden");
    document.body.classList.toggle("no-scroll");
  }
};
