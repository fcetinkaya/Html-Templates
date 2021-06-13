// Carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
})

$(document).ready(function () {
  $(".button a").click(function () {
    $(".overlayM").fadeToggle(200);
    $(this)
      .toggleClass("btn-open")
      .toggleClass("btn-close");
  });
});
$(".overlayM").on("click", function () {
  $(".overlayM").fadeToggle(200);
  $(".button a")
    .toggleClass("btn-open")
    .toggleClass("btn-close");
  open = false;
});
//# sourceURL=pen.js
