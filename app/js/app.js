// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import $ from "jQuery";

document.addEventListener("DOMContentLoaded", () => {
  $(".js-menu").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".mobile-menu").toggleClass("active");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 10) {
      $(".js-top").addClass("active");
      $(".header").addClass("header__bg");
    } else {
      $(".js-top").removeClass("active");
      $(".header").removeClass("header__bg");
    }
  });

  const headerHeight = $(".header").outerHeight();

  $(".js-anchor").on("click", function (e) {
    e.preventDefault();
    $(".mobile-menu").removeClass("active");
    $(".open-menu").removeClass("active");
    const targetId = $(this).attr("href");
    const targetOffset = $(targetId).offset().top - headerHeight;

    $("html, body").stop().animate(
      {
        scrollTop: targetOffset,
      },
      500
    );

    updateActiveLink($(this));
  });

  $(window).on("scroll", function () {
    const scrollPosition = $(this).scrollTop() + headerHeight + 1;

    $("section[id]").each(function () {
      const sectionTop = $(this).offset().top;
      const sectionBottom = sectionTop + $(this).outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const targetId = $(this).attr("id");
        const activeAnchor = $(`.js-anchor[href="#${targetId}"]`);

        if (activeAnchor.length) {
          updateActiveLink(activeAnchor);
        }
      }
    });
  });

  function updateActiveLink(activeAnchor) {
    $(".js-anchor").removeClass("active");
    activeAnchor.addClass("active");
  }

  $(".js-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
