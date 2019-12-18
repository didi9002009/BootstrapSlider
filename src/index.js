// console.log("text");
let counter = 0;
const showSlides = () => {
  // console.log("fn is running");
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  // console.log(slides);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  counter++;

  if (counter > slides.length) {
    counter = 1;
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[counter - 1].style.display = "block";
  dots[counter - 1].className += " active";
  setTimeout(showSlides, 1000);
};
showSlides();
