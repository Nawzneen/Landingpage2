// for carousel
let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__box");
const totalSlides = slides.length;

document
  .getElementById("carousel__btns--next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });
document
  .getElementById("carousel__btns--prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel__box--visible");
    slide.classList.add("carousel__box--hidden");
  }

  slides[slidePosition].classList.add("carousel__box--visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}
function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}

// email
function validateEmail() {
  var mail = document.getElementById("mail").value;

  var regx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // /^([a-zA-z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (regx.test(mail)) {
    alert("Thank you for submitting your email-address");
    return true;
  } else {
    alert("Sorry! Incorrect Email ID");
    return false;
  }
}
