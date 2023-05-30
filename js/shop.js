let span = document.querySelector(".close");
let span_2 = document.querySelector(".hide");
let span_3 = document.querySelector(".none");
let options = document.querySelector(".options");
let options_2 = document.querySelector(".options_2");
let options_3 = document.querySelector(".options_3");
span.onclick = function () {
  options.classList.toggle("d-none");
};
span_2.onclick = function () {
  options_2.classList.toggle("d-none");
};
span_3.onclick = function () {
  options_3.classList.toggle("d-none");
};

$("#man").click(function () {
  $(".man").removeClass("d-none");
  $(".woman").addClass("d-none");
});
$("#woman").click(function () {
  $(".woman").removeClass("d-none");
  $(".man").addClass("d-none");
});
$("#all").click(function () {
  $(".all").removeClass("d-none");
});
