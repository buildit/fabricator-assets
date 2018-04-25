$(".hpe-input input").focus(function(){
  $(this).parent().addClass("hpe-input--active");
});
  
$(".hpe-input input").focusout(function(){
  
  if ($(this).val().length === 0 ) {
    console.log("input", $(this).val());
    $(this).parent().removeClass("hpe-input--active");
  }
});