const lamp = document.getElementById("light-switch");
const topWindow = document.getElementById("window-top");
const mainWindow = document.getElementById("window-main");
const lightSource = document.querySelector(".light-source");
const moon = document.querySelector(".moon");
const clouds = document.querySelectorAll(".c");
const stars = document.querySelectorAll(".s");

lamp.addEventListener("click", () => {
  topWindow.classList.toggle("night");
  mainWindow.classList.toggle("night");
  clouds.forEach(c => c.classList.toggle("hide-cloud"));
  lightSource.classList.toggle("show-light");
  moon.classList.toggle("show-moon");
  stars.forEach(s => s.classList.toggle("show-star"));
});
