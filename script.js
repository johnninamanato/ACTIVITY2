//Loader
// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  // Set a timeout to hide the loader and redirect after 3 seconds
  setTimeout(function () {
    const loader = document.querySelector(".loader-container");
    loader.style.display = "none";

    // Redirect to the main site
    window.location.href = "Main/index2.html";
  }, 2000); // 3000 milliseconds = 3 seconds
});

// Hamburger nav
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const icontea = document.querySelector(".hamburger-icon-tea");
  const coffeeMenu = document.querySelector(".menu-links-coffee");
  const frappeMenu = document.querySelector(".menu-links-frappe");
  const teaMenu = document.querySelector(".menu-links-tea");
  if (menu) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  if (frappeMenu) {
    frappeMenu.classList.toggle("open");
    icon.classList.toggle("open");
  } else if (coffeeMenu) {
    coffeeMenu.classList.toggle("open");
    icon.classList.toggle("open");
  } else if (teaMenu) {
    teaMenu.classList.toggle("open");
    icontea.classList.toggle("open");
  }
}

//Home background
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

//All time fave description transition
var textOverImages = document.getElementsByClassName("card-img");
var previousTextOverImage;
for (var i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function () {
    var classes = this.classList;
    if (classes.contains("show")) {
      classes.remove("show");
    } else {
      if (previousTextOverImage != null)
        previousTextOverImage.classList.remove("show");
      previousTextOverImage = this;
      classes.add("show");
    }
  };
}
