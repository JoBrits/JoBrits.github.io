// Add active class to the current button (PC)
var header = document.getElementById("megaMenu");
var btns = header.getElementsByClassName("navigation__mega-menu__btn");
var searchState = false;
var loginState = false;

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("navigation__mega-menu__active");
  current[0].className = current[0].className.replace(" navigation__mega-menu__active", "");
  this.className += " navigation__mega-menu__active";
  });
}

//Add active class to the current button (PH)

var header = document.getElementById("megaMenuPhone");
var btns = header.getElementsByClassName("navigation__mega-menu-phone__header");
var btnsSub = header.getElementsByClassName("navigation__mega-menu-phone__content__links__sub-header");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    current = $(this);

    $(".navigation__mega-menu-phone__header").addClass(" navigation__mega-menu-phone__header--in-active");
    $(".navigation__mega-menu-phone__back").addClass(" navigation__mega-menu-phone__back--active");
    current.removeClass(" navigation__mega-menu-phone__header--in-active").addClass(" navigation__mega-menu-phone__header--active");
    
  });
}

for (var i = 0; i < btnsSub.length; i++) {
  
  btnsSub[i].addEventListener("click", function() {
    current = $(this);

    $(".navigation__mega-menu-phone__content__links__sub-header").removeClass(" navigation__mega-menu-phone__content__links__sub-header--active");
    $(".navigation__mega-menu-phone__content__links__sub-header").addClass(" navigation__mega-menu-phone__content__links__sub-header--in-active");
    current.removeClass(" navigation__mega-menu-phone__content__links__sub-header--in-active").addClass(" navigation__mega-menu-phone__content__links__sub-header--active");
    
  });
}

function backBtn() {

  var btns = header.getElementsByClassName("navigation__mega-menu-phone__header");

  for (var i = 0; i < btns.length; i++) {
     $(btns).removeClass(" navigation__mega-menu-phone__header--in-active").removeClass(" navigation__mega-menu-phone__header--active");
  }
  
  $(".navigation__mega-menu-phone__back").removeClass(" navigation__mega-menu-phone__back--active");
  
};


function loginBtn() {
  
  if (loginState === false) {

    $("#login-menu").addClass(" navigation__login-menu--active");
    $("#tint").addClass(" navigation__menu__tint2--active");
    $("#Bg").addClass(" navigation__menu__background2--active");
    $(".navigation__menu__nav__login__btn").addClass(" navigation__menu__nav__login__btn--in-active");
    $(".navigation__menu__nav__login__btn__close").addClass(" navigation__menu__nav__login__btn__close--active");
    $(".navigation__menu__nav__search").addClass(" navigation__menu__nav__search--in-active");
    $(".navigation__menu__button").addClass(" navigation__menu__button--in-active");
    loginState = true;
    
  } else {
    
    $("#login-menu").removeClass(" navigation__login-menu--active");
    $("#tint").removeClass(" navigation__menu__tint2--active");
    $("#Bg").removeClass(" navigation__menu__background2--active");
    $(".navigation__menu__nav__login__btn").removeClass(" navigation__menu__nav__login__btn--in-active");
    $(".navigation__menu__nav__login__btn__close").removeClass(" navigation__menu__nav__login__btn__close--active");
    $(".navigation__menu__nav__search").removeClass(" navigation__menu__nav__search--in-active");
    $(".navigation__menu__button").removeClass(" navigation__menu__button--in-active");
    loginState = false;

  }
  
};


// Header Shrink
$(function(){
  var shrinkHeader = 200;
   $(window).scroll(function() {
     var scroll = getCurrentScroll();
       if ( scroll >= shrinkHeader ) {
            $('.navigation__segments').addClass('shrink');
         }
         else {
             $('.navigation__segments').removeClass('shrink');
         }
   });

  var moveMenu = 200;
   $(window).scroll(function() {
     var scroll = getCurrentScroll();
       if ( scroll >= moveMenu ) {
            $('.navigation__menu__button').addClass('move');
         }
         else {
             $('.navigation__menu__button').removeClass('move');
         }
   });

 function getCurrentScroll() {
     return window.pageYOffset || document.documentElement.scrollTop;
     }
 });


























 