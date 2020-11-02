//mostrare / nascondere il menu principale

//attenzione al tag i
//primo metodo
$(".fa-bars").click(
  function(){
    $(".hamburger-menu").fadeIn();
  }
);

$(".fa-times").click(
  function(){
    $(".hamburger-menu").fadeOut();
  }
);

//secondo metodo
/*$(".fa-bars").click(function () {
  $(".hamburger-menu").addClass('active');
});

$(".fa-times").click(function () {
  $(".hamburger-menu").removeClass('active');
});*/

//terzo metodo
/*$('.header-right > a').click(function() {
  $('.hamburger-menu').addClass('active');
  }
);

$('.hamburger-menu > a').click(function() {
  $('.hamburger-menu').removeClass('active');
  }
);*/
