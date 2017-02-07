

    $(document).ready(function(){
        $('.slider').slick({
  // centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  prevArrow: $(".our-team").find(".buttons").find("img").last(),
  nextArrow: $(".our-team").find(".buttons").find("img").first(),
  responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
    },
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
