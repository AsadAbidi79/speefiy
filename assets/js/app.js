//////////// Navbar Background Change
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

///////// Navbar disappear while scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.transition = "500ms all";
  } else {
    document.getElementById("navbar").style.top = "-1500px";
    document.getElementById("navbar").style.transition = "500ms all";
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    rewind: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });
});