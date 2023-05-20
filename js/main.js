$(function() {
  // Mobile Menu JS
  $(".hamburger-menu").click(function() {
    $("body").toggleClass("active");
    $(this).toggleClass("active");
    $(".navbar-menu-mobile").toggleClass("active");
    $(".menu-listing-mobile").toggleClass("active");
  });
});