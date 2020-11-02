//mostrare / nascondere il menu principale

//attenzione al tag i
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
