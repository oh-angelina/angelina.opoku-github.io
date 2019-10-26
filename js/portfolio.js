// /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navigation").style.top = "0";
//   } else {
//     document.getElementById("navigation").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// didn't work

/*(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $("#navigation").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });

});
  }(jQuery));*/