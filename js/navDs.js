var menuBtn = false;
var header = document.getElementById("megaMenu");
var btns = header.getElementsByClassName("navigation3__mega-menu__content__bar__header");
var btnsSeg = header.getElementsByClassName("navigation3__mega-menu__segments__bar__segment__btn");
var contSeg = header.getElementsByClassName("navigation3__mega-menu__content__bar");


// Menu Button
function menuTriger() {
      
  if (menuBtn === false) {
    $('.navigation3__navBar').addClass('navigation3__navBar--active');
    $(".navigation3__navBar__menu__icon").addClass(" navigation3__navBar__menu__icon--active");
    $(".navigation3__navBar__menu__label1").addClass(" navigation3__navBar__menu__label1--inActive");
    $(".navigation3__navBar__menu__label2").addClass(" navigation3__navBar__menu__label2--active");
    $('.navigation3__navBar__menu__search__icon2').addClass('navigation3__navBar__menu__search__icon2--active');
    $(".navigation3__navBar__menu__tint").addClass(" navigation3__navBar__menu__tint--active");
    $(".navigation3__navBar__menu__background").addClass(" navigation3__navBar__menu__background--active");
    
    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--active");
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--in-active");
    $("#segMe").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyB").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#firstMeHeader").addClass(" navigation3__mega-menu__content__bar__header--active");
    $("#firstMeLinks").addClass(" navigation3__mega-menu__content__bar__links--active");

    menuBtn = true;
  }  else {
    $('.navigation3__navBar').removeClass('navigation3__navBar--active');
    $(".navigation3__navBar__menu__icon").removeClass(" navigation3__navBar__menu__icon--active");
    $(".navigation3__navBar__menu__label1").removeClass(" navigation3__navBar__menu__label1--inActive");
    $(".navigation3__navBar__menu__label2").removeClass(" navigation3__navBar__menu__label2--active");
    $('.navigation3__navBar__menu__search__icon2').removeClass('navigation3__navBar__menu__search__icon2--active');
    $(".navigation3__navBar__menu__tint").removeClass(" navigation3__navBar__menu__tint--active");
    $(".navigation3__navBar__menu__background").removeClass(" navigation3__navBar__menu__background--active");

    $("#segMe").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMyB").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");

    $(".navigation3__mega-menu__content__bar__header").removeClass(" navigation3__mega-menu__content__bar__header--active").removeClass(" navigation3__mega-menu__content__bar__header--in-active");
    $(".navigation3__mega-menu__content__bar__links").removeClass(" navigation3__mega-menu__content__bar__links--active").removeClass(" navigation3__mega-menu__content__bar__links--in-active");
    $(".navigation3__mega-menu__content__bar").removeClass(" navigation3__mega-menu__content__bar--in-active");

    
   
    menuBtn = false;
  } 

};

// Product Menu
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    current = $(this);
    $(".navigation3__mega-menu__content__bar__header").addClass(" navigation3__mega-menu__content__bar__header--in-active").removeClass(" navigation3__mega-menu__content__bar__header--active");
    current.removeClass("navigation3__mega-menu__content__bar__header--in-active").addClass(" navigation3__mega-menu__content__bar__header--active"); 
    $(".navigation3__mega-menu__content__bar__links").addClass(" navigation3__mega-menu__content__bar__links--in-active").removeClass(" navigation3__mega-menu__content__bar__links--active");
    current.next().removeClass("navigation3__mega-menu__content__bar__links--in-active").addClass(" navigation3__mega-menu__content__bar__links--active"); 
    $("#backBtnMobile").addClass(" navigation3__mega-menu__back--active");
  });
}

// Segment Menu
function segmentTriger(args) {
  
  if (args === 'me') {
    console.log(args+ '1');
    $("#segMe").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMyB").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");

    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--active").removeClass(" navigation3__mega-menu__content__bar--in-active");
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active");
    
    $(".navigation3__mega-menu__content__bar__header").removeClass(" navigation3__mega-menu__content__bar__header--active");
    $(".navigation3__mega-menu__content__bar__links").removeClass(" navigation3__mega-menu__content__bar__links--active");

    $("#firstMeHeader").addClass(" navigation3__mega-menu__content__bar__header--active").removeClass(" navigation3__mega-menu__content__bar__header--in-active");
    $("#firstMeLinks").addClass(" navigation3__mega-menu__content__bar__links--active").removeClass(" navigation3__mega-menu__content__bar__links--in-active");

  }  else {
    $("#segMyB").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMe").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--active").removeClass(" navigation3__mega-menu__content__bar--in-active"); 
    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    
    $(".navigation3__mega-menu__content__bar__header").removeClass(" navigation3__mega-menu__content__bar__header--active");
    $(".navigation3__mega-menu__content__bar__links").removeClass(" navigation3__mega-menu__content__bar__links--active");
    
    $("#firstBusHeader").addClass(" navigation3__mega-menu__content__bar__header--active").removeClass(" navigation3__mega-menu__content__bar__header--in-active");
    $("#firstBusLinks").addClass(" navigation3__mega-menu__content__bar__links--active").removeClass(" navigation3__mega-menu__content__bar__links--in-active");
  } 

};


// Mobile Menu Button
function menuTrigerMobile() {
      
  if (menuBtn === false) {
    $('.navigation3__navBar').addClass('navigation3__navBar--active');
    $(".navigation3__navBar__menu__icon").addClass(" navigation3__navBar__menu__icon--active");
    $(".navigation3__navBar__menu__label1").addClass(" navigation3__navBar__menu__label1--inActive");
    $(".navigation3__navBar__menu__label2").addClass(" navigation3__navBar__menu__label2--active");
    $('.navigation3__navBar__menu__search__icon2').addClass('navigation3__navBar__menu__search__icon2--active');
    $(".navigation3__navBar__menu__tint").addClass(" navigation3__navBar__menu__tint--active");
    $(".navigation3__navBar__menu__background").addClass(" navigation3__navBar__menu__background--active");
    
    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--active");
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--in-active");
    $("#segMeMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyBMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");

    menuBtn = true;
  }  else {
    $('.navigation3__navBar').removeClass('navigation3__navBar--active');
    $(".navigation3__navBar__menu__icon").removeClass(" navigation3__navBar__menu__icon--active");
    $(".navigation3__navBar__menu__label1").removeClass(" navigation3__navBar__menu__label1--inActive");
    $(".navigation3__navBar__menu__label2").removeClass(" navigation3__navBar__menu__label2--active");
    $('.navigation3__navBar__menu__search__icon2').removeClass('navigation3__navBar__menu__search__icon2--active');
    $(".navigation3__navBar__menu__tint").removeClass(" navigation3__navBar__menu__tint--active");
    $(".navigation3__navBar__menu__background").removeClass(" navigation3__navBar__menu__background--active");

    $("#segMe").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMyB").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");

    $(".navigation3__mega-menu__content__bar__header").removeClass(" navigation3__mega-menu__content__bar__header--active").removeClass(" navigation3__mega-menu__content__bar__header--in-active");
    $(".navigation3__mega-menu__content__bar__links").removeClass(" navigation3__mega-menu__content__bar__links--active").removeClass(" navigation3__mega-menu__content__bar__links--in-active");
    $(".navigation3__mega-menu__content__bar").removeClass(" navigation3__mega-menu__content__bar--in-active");

    $("#backBtnMobile").removeClass(" navigation3__mega-menu__back--active");
    
    menuBtn = false;
  } 

};

// Mobile Segment Menu
function segmentTrigerMobile(args) {
  
  if (args === 'me') {
    
    $("#segMeMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMyBMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");

    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--active").removeClass(" navigation3__mega-menu__content__bar--in-active");
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active");
    
    $(".navigation3__mega-menu__content__bar__header").removeClass(" navigation3__mega-menu__content__bar__header--active");
    $(".navigation3__mega-menu__content__bar__links").removeClass(" navigation3__mega-menu__content__bar__links--active");

    

  }  else {

    $("#segMyBMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMeMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--active").removeClass(" navigation3__mega-menu__content__bar--in-active"); 
    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    
    $(".navigation3__mega-menu__content__bar__header").removeClass(" navigation3__mega-menu__content__bar__header--active");
    $(".navigation3__mega-menu__content__bar__links").removeClass(" navigation3__mega-menu__content__bar__links--active");
    
    
  } 

};

// Mobile Menu Button
function backBtnMobile() {

  $(".navigation3__mega-menu__content__bar__header").removeClass(" navigation3__mega-menu__content__bar__header--in-active").removeClass(" navigation3__mega-menu__content__bar__header--active");
  $(".navigation3__mega-menu__content__bar__links").addClass(" navigation3__mega-menu__content__bar__links--in-active").removeClass(" navigation3__mega-menu__content__bar__links--active");
  $("#backBtnMobile").removeClass(" navigation3__mega-menu__back--active");
};


// Header White transitions
$(function(){
  var colorHeader = 100;
   $(window).scroll(function() {
     var scroll = getCurrentScroll();
       if ( scroll >= colorHeader ) {
            $('.navigation3__navBar').addClass('navigation3__navBar--black');
            $('.navigation3__navBar__menu__icon').addClass('navigation3__navBar__menu__icon--black');
            $('.navigation3__navBar__menu__label1').addClass('navigation3__navBar__menu__label1--black');
            $('.navigation3__navBar__menu__label2').addClass('navigation3__navBar__menu__label2--black');
            $('.navigation3__navBar__menu__search__icon2').addClass('navigation3__navBar__menu__search__icon2--black');
          }
         else {
             $('.navigation3__navBar').removeClass('navigation3__navBar--black');
             $('.navigation3__navBar__menu__icon').removeClass('navigation3__navBar__menu__icon--black');
             $('.navigation3__navBar__menu__label1').removeClass('navigation3__navBar__menu__label1--black');
             $('.navigation3__navBar__menu__label2').removeClass('navigation3__navBar__menu__label2--black');
             $('.navigation3__navBar__menu__search__icon2').removeClass('navigation3__navBar__menu__search__icon2--black');
            }
   });

 function getCurrentScroll() {
     return window.pageYOffset || document.documentElement.scrollTop;
     }
 });


    
 