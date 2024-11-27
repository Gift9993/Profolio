// Get the theme toggle button and icon
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Add event listener to the theme toggle button
themeToggle.addEventListener("click", () => {
  // Check if the theme icon is a sun or a moon
  const isSunIcon = themeIcon.classList.contains("fa-sun");

  // Toggle the theme icon
  themeIcon.classList.replace(
    isSunIcon ? "fa-sun" : "fa-moon",
    isSunIcon ? "fa-moon" : "fa-sun"
  );

  // Get all the elements that need to change when the theme changes
  const lightModeElements = [
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

  // Toggle the light-mode class on the elements
  lightModeElements.forEach((el) => el.classList.toggle("dark-mode"));
});

const pfpElement = document.getElementById("profile-pic"); // assuming your PFP has an ID of 'pfp'
const images = [
  "/Personal Profile Page/pfp.jpeg",
  "/Personal Profile Page/naruto.jpeg",
  "/Personal Profile Page/Breathtaking Naruto 4K Wallpaper for Your Screen.jpeg",
  "/Personal Profile Page/Gojo wallpaper.jpeg",
]; // array of image sources
let currentImageIndex = 0;

setInterval(() => {
  pfpElement.src = images[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % images.length;
}, 5000); // 10000ms = 10 seconds
