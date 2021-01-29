var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    console.log(slides[i].classList[2] === 'slider_active')
    if(slides[i].classList[2] === 'slider_active'){
      slides[i].classList.toggle("slider_active");
    }
  }
  slides[n-1].classList.toggle("slider_active");

  for (i = 0; i < slides.length; i++) {
    console.log(dots[i].classList[1] === 'active')
    if(dots[i].classList[1] === 'active'){
      dots[i].classList.toggle("active");
    }
  }
  dots[n-1].classList.toggle("active");
}
