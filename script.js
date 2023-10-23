// Hamburger nav
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const coffeeMenu = document.querySelector(".menu-links-coffee");
  if (menu) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  } else if (coffeeMenu) {
    coffeeMenu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  const frappeMenu = document.querySelector(".menu-links-frappe");
  if (menu) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  } else if (frappeMenu) {
    frappeMenu.classList.toggle("open");
    icon.classList.toggle("open");
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

/* Sa drinks di paayos
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow() {
  let stt = 0;
  items[active].style.transform = 'none';
  items[active].style.zIndex = 1;
  items[active].style.filter = 'none';
  items[active].style.opacity = 1;
  for (var i = active + 1; i < items.length; i++){
    stt++;
    items[i].style.transform = 'translateX(${120*stt}px) scale (${1-0.2stt}) perspective(16px) rotateY(-1deg';
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (var i = active - 1; 1 >= 0; i--){
    stt++;
    items[i].style.transform = 'translateX(${120*stt}px) scale (${1-0.2stt}) perspective(16px) rotateY(-1deg';
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
loadShow();
next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
}
prev.onclick - function () {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
}*/
