
// $('.prices__card-image').slick();

$('.prices__card-image').slick({
  infinite: true,
  slidesToShow: 1,
  adaptiveHeight: true
});

// $('.gallery__block').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1
// });



$('.gallery__block').slick({
  infinite: true,
  // adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});











$('.class-mi').slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 4,
   slidesToScroll: 4,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
 });


