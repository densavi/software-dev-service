// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import $ from "jQuery";

document.addEventListener("DOMContentLoaded", () => {
  $(".js-menu").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 10) {
      $(".header").addClass("header__bg");
    } else {
      $(".header").removeClass("header__bg");
    }
  });
});
