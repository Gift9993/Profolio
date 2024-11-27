const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", () => {
  themeIcon.classList.toggle("fa-sun");
  themeIcon.classList.toggle("fa-moon");

  const elements = [
    document.body,
    document.querySelector("header"),
    document.querySelector("main"),
    ...document.querySelectorAll("section"),
    document.querySelector(".skills ul"),
    document.querySelector(".projects ul"),
    document.querySelector(".contact-links ul"),
    document.querySelector("footer"),
    document.querySelector(".projects ul a"),
  ];

  elements.forEach((el) => el.classList.toggle("dark-mode"));
});

const pfpElement = document.getElementById("profile-pic");
const images = [
  "aot.jpeg",
  "dark.jpeg",
  "Gojo wallpaper.jpeg",
  "naruto.jpeg",
  "naruto2.jpeg",
  "pfp.jpeg",
];

let currentImageIndex = 0;

setInterval(() => {
  pfpElement.src = images[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % images.length;
}, 5000);

