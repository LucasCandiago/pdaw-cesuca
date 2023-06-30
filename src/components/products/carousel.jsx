import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$("#products-carousel").owlCarousel({
  loop: false,
  nav: true,
  navText: [
    "<i class='fa-solid fa-chevron-left'></i>",
    "<i class='fa-solid fa-chevron-right'></i>",
  ],
  dots: false,
  margin: 0,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
      nav: true,
    },
  },
});

