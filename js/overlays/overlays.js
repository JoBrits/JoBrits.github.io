
var overlayState = false;

function overlay() {
  
  if (overlayState === false) {
    $(".overlay__tint").addClass(" overlay__tint--active");
    $(".overlay__container").addClass(" overlay__container--active");
    overlayState = true;
    
  } else {
    $(".overlay__tint").removeClass(" overlay__tint--active");
    $(".overlay__container").removeClass(" overlay__container--active");
    overlayState = false;
  }
  
};