/* var slideIndex = 1;
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
}*/
$(function(){
  $(window).resize(function() {
        console.log( $(window).width() );
  })
})
$(document).ready(function(){

  $('.reviews__items').slick({
    arrows:false,
    dots:true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
});
