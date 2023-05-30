let nav = document.querySelector("nav");
let link = document.querySelector("nav a");
window.onscroll = function () {
  if (this.scrollY >= 650) {
    nav.classList.add("green-color");
    nav.classList.add("blue-color");
  } else {
    nav.classList.remove("green-color");
    nav.classList.remove("blue-color");
  }
};
