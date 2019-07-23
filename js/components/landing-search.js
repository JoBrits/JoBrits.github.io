$("#landingForm input").on("change mousedown keyup paste", function() {
  
  var inputValue = $(this).val();

	if (inputValue) {
    $(".landing__sideTint").addClass(" landing__sideTint--inActive");
    $(".landing__searchTint").addClass(" landing__searchTint--active");
    $(".landing__form__controls").addClass(" landing__form__controls--active");
    
	} else {
		$(".landing__sideTint").removeClass(" landing__sideTint--inActive");
		$(".landing__searchTint").removeClass(" landing__searchTint--active");
		$(".landing__form__controls").removeClass(" landing__form__controls--active");
    
	}
});


$(document).ready(function() {
	$("#landingForm input").focus();
});
