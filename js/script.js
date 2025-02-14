$(document).ready(function () {
  $(".drop-menu").on("click", function(){
    $(".menu-wrap").addClass("open");
    $("html, body").addClass("overflow");
  })
  $(".close-menu").on("click", function(){
    $(".menu-wrap").removeClass("open");
    $("html, body").removeClass("overflow");
  })
  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
  });
  $(".request-form").validate({
    errorPlacement: function (error, element) {}
});
});
