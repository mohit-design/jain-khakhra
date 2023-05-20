$(function() {
  // Desktop Logo and Navigationbar Menu Section JS
	var lastScrollTop = 0,
  offsetTopMenu = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= offsetTopMenu)
      return;
    if (st > lastScrollTop) {
      // Down Scroll code
      $(".bg-logo-navbar-menu-desktop").css({
        "top":"-120px",
        "box-shadow":"none"
      });
    } else {
      // Up Scroll code
      $(".bg-logo-navbar-menu-desktop").css({
        "top": "0",
        "box-shadow": "0px 10px 13px -7px #00000020, 5px 5px 15px 5px rgba(0,0,0,0)"
      });
    }
    lastScrollTop = st;
  });
});