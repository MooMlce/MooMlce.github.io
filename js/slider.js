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
