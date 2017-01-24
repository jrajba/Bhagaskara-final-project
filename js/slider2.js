$(document).ready(function(){

$('.slider2').slick({
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  dots: true,
  autoplaySpeed: 2000,
  responsive: [

    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]

});

});
