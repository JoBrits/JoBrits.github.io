
// Add active class to the current button (PC)
var header = document.getElementById("megaMenu");
var btns = header.getElementsByClassName("navigation2__mega-menu__btn");
var btnsSeg = header.getElementsByClassName("navigation2__mega-menu__segments__segment__btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("navigation2__mega-menu__active");
  $(this).parent().find(".navigation2__mega-menu__btn").removeClass("navigation2__mega-menu__active");
  $(this).addClass("navigation2__mega-menu__active");
  //current[0].className = current[0].className.replace(" navigation2__mega-menu__active", "");
  //this.className += " navigation2__mega-menu__active";
  });
}

for (var i = 0; i < btnsSeg.length; i++) {
  btnsSeg[i].addEventListener("click", function() {
    current = $(this);

    $(".navigation2__mega-menu__segments__segment__btn").addClass(" navigation2__mega-menu__segments__segment__btn--in-active").removeClass(" navigation2__mega-menu__segments__segment__btn--active");
    $(".navigation2__mega-menu__segments__segment__content").addClass(" navigation2__mega-menu__segments__segment__content--in-active").removeClass(" navigation2__mega-menu__segments__segment__content--active");
    
    current.removeClass("navigation2__mega-menu__segments__segment__btn--in-active").addClass(" navigation2__mega-menu__segments__segment__btn--active");
    current.next().removeClass("navigation2__mega-menu__segments__segment__content--in-active").addClass(" navigation2__mega-menu__segments__segment__content--active");
    
  });
}



//Add active class to the current button (PH)

var header2 = document.getElementById("megaMenuPhone");
var btnsMob = header2.getElementsByClassName("navigation2__mega-menu-phone__header");
var btnsSub = header2.getElementsByClassName("navigation2__mega-menu-phone__content__links__sub-header");

for (var i = 0; i < btnsMob.length; i++) {
  btnsMob[i].addEventListener("click", function() {
    current = $(this);

    $(".navigation2__mega-menu-phone__header").addClass(" navigation2__mega-menu-phone__header--in-active");
    $(".navigation2__mega-menu-phone__back").addClass(" navigation2__mega-menu-phone__back--active");
    current.removeClass(" navigation2__mega-menu-phone__header--in-active").addClass(" navigation2__mega-menu-phone__header--active");
    current.parent().find(".navigation2__mega-menu-phone__content").addClass("navigation2__mega-menu-phone__content--active");
  });
}

for (var i = 0; i < btnsSub.length; i++) {
  
  btnsSub[i].addEventListener("click", function() {
    current = $(this);

    $(".navigation2__mega-menu-phone__content__links__sub-header").addClass(" navigation2__mega-menu-phone__content__links__sub-header--in-active");
    current.removeClass(" navigation2__mega-menu-phone__content__links__sub-header--in-active").addClass(" navigation2__mega-menu-phone__content__links__sub-header--active");
    current.parent().find(".navigation2__mega-menu-phone__content__links__products").addClass("navigation2__mega-menu-phone__content__links__products--active");
    
    $(".navigation2__mega-menu-phone__back").removeClass(" navigation2__mega-menu-phone__back--active");
    $(".navigation2__mega-menu-phone__back2").addClass(" navigation2__mega-menu-phone__back2--active");

  });
}


// Back Button
function backBtn() {

  var btnsMob = header2.getElementsByClassName("navigation2__mega-menu-phone__header");

  for (var i = 0; i < btnsMob.length; i++) {
     $(btnsMob).removeClass(" navigation2__mega-menu-phone__header--in-active").removeClass(" navigation2__mega-menu-phone__header--active");
     $(btnsMob).parent().find(".navigation2__mega-menu-phone__content").removeClass("navigation2__mega-menu-phone__content--active");
  }
  
  
  
  $(".navigation2__mega-menu-phone__back").removeClass(" navigation2__mega-menu-phone__back--active");
  
};
// Back Button
function backBtn2() {

  var btnsMob = header.getElementsByClassName("navigation2__mega-menu-phone__header");

 
  
  for (var i = 0; i < btnsSub.length; i++) {
      $(btnsSub).removeClass(" navigation2__mega-menu-phone__content__links__sub-header--active").removeClass(" navigation2__mega-menu-phone__content__links__sub-header--in-active");
      $(btnsSub).parent().find(".navigation2__mega-menu-phone__content__links__products").removeClass("navigation2__mega-menu-phone__content__links__products--active");

    }
  
  $(".navigation2__mega-menu-phone__back2").removeClass(" navigation2__mega-menu-phone__back2--active");
  $(".navigation2__mega-menu-phone__back").addClass(" navigation2__mega-menu-phone__back--active");

};





























 