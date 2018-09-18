(function($) {
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  $("body").scrollspy({
    target: "#mainNav",
    offset: 200
  });

  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 200) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();

  $(window).scroll(navbarCollapse);
});
