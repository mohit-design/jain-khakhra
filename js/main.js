$(function() {
  // AOS Animation JS
  AOS.init({
    easing: 'ease-in-out-sine'
  });
  // Mobile Menu JS
  $(".hamburger-menu").click(function() {
    $("body").toggleClass("active");
    $(this).toggleClass("active");
    $(".navbar-menu-mobile").toggleClass("active");
    $(".menu-listing-mobile").toggleClass("active");
  });
});