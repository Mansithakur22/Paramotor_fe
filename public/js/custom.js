(function ($) {
  "use strict";

  $(document).ready(function () {
    var $window = $(window);
    var didScroll,
      lastScrollTop = 0,
      delta = 5,
      $mainNav = $("#sticky"),
      $mainNavHeight = $mainNav.outerHeight(),
      scrollTop;

    $window.on("scroll", function () {
      didScroll = true;
      scrollTop = $(this).scrollTop();
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 200);

    function hasScrolled() {
      if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        return;
      }
      if (scrollTop > lastScrollTop && scrollTop > $mainNavHeight) {
        $mainNav.css("top", -$mainNavHeight);
      } else {
        if (scrollTop + $(window).height() < $(document).height()) {
          $mainNav.css("top", 0);
        }
      }
      lastScrollTop = scrollTop;
    }

    //sticky header
    function navbarFixed() {
      if ($("#sticky").length) {
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          if (scroll) {
            $("#sticky").addClass("navbar_fixed");
          } else {
            $("#sticky").removeClass("navbar_fixed");
          }
        });
      }
    }
    navbarFixed();

    $(".navbar-nav > li .mobile_dropdown_icon").on("click", function (e) {
      $(this).parent().find("ul").first().toggle(300);
      $(this).parent().siblings().find("ul").hide(300);
    });

    if ($(".submenu").length) {
      $(".submenu > .dropdown-toggle").on("click", function () {
        var location = $(this).attr("href");
        window.location.href = location;
        return false;
      });
    }

    //initialize smmothscroll
    if ($("header").length) {
      $("header").smoothScroll();
    }

    // === Back to Top Button
    var back_top_btn = $("#back-to-top");

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        back_top_btn.addClass("show");
      } else {
        back_top_btn.removeClass("show");
      }
    });

    back_top_btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });

    //initialize wow js
    new WOW({}).init();

    //initialize counterUp
    if ($(".counter span").length) {
      $(".counter span").counterUp();
    }
    if ($(".stat-counter").length) {
      $(".stat-counter").counterUp();
    }
    if ($(".partner_slider").length) {
      $(".partner_slider").slick({
        dots: false,
        arrows: false,
        centerMode: false,
        slidesToShow: 4,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 7000,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ],
      });
    }
})
  
})(jQuery);
