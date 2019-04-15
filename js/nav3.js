var menuBtn = false;
var header = document.getElementById("megaMenu");
var btns = header.getElementsByClassName("navigation3__mega-menu__content__bar__header");
var btnsSeg = header.getElementsByClassName("navigation3__mega-menu__segments__bar__segment__btn");
var contSeg = header.getElementsByClassName("navigation3__mega-menu__content__bar");
var loginState = false;

// Menu Button
function menuTriger() {
      
  if (menuBtn === false) {
    $('.navigation3__navBar').addClass('navigation3__navBar--black');
    $('.navigation3__navBar__menu__icon').addClass('navigation3__navBar__menu__icon--active');
    $('.navigation3__navBar__menu__label1').addClass('navigation3__navBar__menu__label1--black');
    $('.navigation3__navBar__menu__label2').addClass('navigation3__navBar__menu__label2--black');
    $('.navigation3__navBar__menu__search__input').addClass('navigation3__navBar__menu__search__input--black');
    $('.navigation3__navBar__menu__group').addClass('navigation3__navBar__menu__group--black');
    $('.navigation3__navBar__menu__search').addClass('navigation3__navBar__menu__search--black');
    $('.navigation3__navBar__menu__login').addClass('navigation3__navBar__menu__login--black');
    $('.navigation3__navBar__menu__search__bg').addClass('navigation3__navBar__menu__search__bg--black');
    
    $(".navigation3__navBar__menu__tint").addClass(" navigation3__navBar__menu__tint--active");
    $(".navigation3__navBar__menu__background").addClass(" navigation3__navBar__menu__background--active");
    
    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--active");
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--in-active");
    $("#forMyFamilyMenu").addClass(" navigation3__mega-menu__content__bar--in-active");
    $("#forMyPrivateMenu").addClass(" navigation3__mega-menu__content__bar--in-active");
    $("#forMyCorporateMenu").addClass(" navigation3__mega-menu__content__bar--in-active");

    $("#segMe").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyB").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMyF").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMyP").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMyC").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#firstMeHeader").addClass(" navigation3__mega-menu__content__bar__header--active");
    $("#firstMeLinks").addClass(" navigation3__mega-menu__content__bar__links--active");

    menuBtn = true;

  }  else {
    $(".navigation3__navBar").removeClass("navigation3__navBar--black");
    $(".navigation3__navBar__menu__icon").removeClass("navigation3__navBar__menu__icon--active");
    $(".navigation3__navBar__menu__label1").removeClass("navigation3__navBar__menu__label1--black");
    $(".navigation3__navBar__menu__label2").removeClass("navigation3__navBar__menu__label2--black");
    $(".navigation3__navBar__menu__search__input").removeClass("navigation3__navBar__menu__search__input--black");
    $(".navigation3__navBar__menu__group").removeClass("navigation3__navBar__menu__group--black");
    $(".navigation3__navBar__menu__search").removeClass("navigation3__navBar__menu__search--black");
    $(".navigation3__navBar__menu__login").removeClass("navigation3__navBar__menu__login--black");
    $(".navigation3__navBar__menu__search__bg").removeClass("navigation3__navBar__menu__search__bg--black");   
    
    $(".navigation3__navBar__menu__tint").removeClass(" navigation3__navBar__menu__tint--active");
    $(".navigation3__navBar__menu__background").removeClass(" navigation3__navBar__menu__background--active");

    $("#forMeMenu").removeClass(" navigation3__mega-menu__content__bar--active");
    $("#forMyBusinessMenu").removeClass(" navigation3__mega-menu__content__bar--in-active");
    $("#forMyFamilyMenu").removeClass(" navigation3__mega-menu__content__bar--in-active");
    $("#forMyPrivateMenu").removeClass(" navigation3__mega-menu__content__bar--in-active");
    $("#forMyCorporateMenu").removeClass(" navigation3__mega-menu__content__bar--in-active");

    $("#segMe").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMyB").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMyF").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMyP").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMyC").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");

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
};

// Segment Menu
function segmentTriger(args) {
  
  if (args === 'me') {
    $("#segMe").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMyB").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyF").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyP").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyC").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");

    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--active").removeClass(" navigation3__mega-menu__content__bar--in-active");
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active");
    $("#forMyFamilyMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active");
    $("#forMyPrivateMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active");
    $("#forMyCorporateMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active");
    
    $(".navigation3__mega-menu__content__bar__header").removeClass(" navigation3__mega-menu__content__bar__header--active");
    $(".navigation3__mega-menu__content__bar__links").removeClass(" navigation3__mega-menu__content__bar__links--active");

    $("#firstMeHeader").addClass(" navigation3__mega-menu__content__bar__header--active").removeClass(" navigation3__mega-menu__content__bar__header--in-active");
    $("#firstMeLinks").addClass(" navigation3__mega-menu__content__bar__links--active").removeClass(" navigation3__mega-menu__content__bar__links--in-active");

  }  else if (args === 'myBusiness') {
    $("#segMyB").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMe").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyF").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyP").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyC").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--active").removeClass(" navigation3__mega-menu__content__bar--in-active"); 
    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyFamilyMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyPrivateMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyCorporateMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    
    $(".navigation3__mega-menu__content__bar__header").removeClass(" navigation3__mega-menu__content__bar__header--active");
    $(".navigation3__mega-menu__content__bar__links").removeClass(" navigation3__mega-menu__content__bar__links--active");
    
    $("#firstBusHeader").addClass(" navigation3__mega-menu__content__bar__header--active").removeClass(" navigation3__mega-menu__content__bar__header--in-active");
    $("#firstBusLinks").addClass(" navigation3__mega-menu__content__bar__links--active").removeClass(" navigation3__mega-menu__content__bar__links--in-active");
 
  } else if (args === 'myFamily') {
    $("#segMyF").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMe").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyB").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyC").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyP").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    
    $("#forMyFamilyMenu").addClass(" navigation3__mega-menu__content__bar--active").removeClass(" navigation3__mega-menu__content__bar--in-active"); 
    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyPrivateMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyCorporateMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    
    $(".navigation3__mega-menu__content__bar__header").removeClass(" navigation3__mega-menu__content__bar__header--active");
    $(".navigation3__mega-menu__content__bar__links").removeClass(" navigation3__mega-menu__content__bar__links--active");
    
    $("#firstFamHeader").addClass(" navigation3__mega-menu__content__bar__header--active").removeClass(" navigation3__mega-menu__content__bar__header--in-active");
    $("#firstFamLinks").addClass(" navigation3__mega-menu__content__bar__links--active").removeClass(" navigation3__mega-menu__content__bar__links--in-active");
  
  } else if (args === 'myPrivateBanking') {
    $("#segMyP").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMe").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyB").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyC").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyF").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    
    $("#forMyPrivateMenu").addClass(" navigation3__mega-menu__content__bar--active").removeClass(" navigation3__mega-menu__content__bar--in-active"); 
    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyFamilyMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyCorporateMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    
    $(".navigation3__mega-menu__content__bar__header").removeClass(" navigation3__mega-menu__content__bar__header--active");
    $(".navigation3__mega-menu__content__bar__links").removeClass(" navigation3__mega-menu__content__bar__links--active");
    
    $("#firstPvtHeader").addClass(" navigation3__mega-menu__content__bar__header--active").removeClass(" navigation3__mega-menu__content__bar__header--in-active");
    $("#firstPvtLinks").addClass(" navigation3__mega-menu__content__bar__links--active").removeClass(" navigation3__mega-menu__content__bar__links--in-active");
  
  } else {
    $("#segMyC").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMe").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyB").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyP").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyF").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    
    $("#forMyCorporateMenu").addClass(" navigation3__mega-menu__content__bar--active").removeClass(" navigation3__mega-menu__content__bar--in-active"); 
    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyFamilyMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyPrivateMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    
    $(".navigation3__mega-menu__content__bar__header").removeClass(" navigation3__mega-menu__content__bar__header--active");
    $(".navigation3__mega-menu__content__bar__links").removeClass(" navigation3__mega-menu__content__bar__links--active");
    
    $("#firstCorHeader").addClass(" navigation3__mega-menu__content__bar__header--active").removeClass(" navigation3__mega-menu__content__bar__header--in-active");
    $("#firstCorLinks").addClass(" navigation3__mega-menu__content__bar__links--active").removeClass(" navigation3__mega-menu__content__bar__links--in-active");
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
    $("#forMyFamilyMenu").addClass(" navigation3__mega-menu__content__bar--in-active");
    $("#forMyPrivateMenu").addClass(" navigation3__mega-menu__content__bar--in-active");
    $("#forMyCorporateMenu").addClass(" navigation3__mega-menu__content__bar--in-active");
   
    $("#segMeMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyBMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMyFMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMyPMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMyCMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");

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
    $("#segMyFMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyPMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyCMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    
    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--active").removeClass(" navigation3__mega-menu__content__bar--in-active");
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active");
    $("#forMyFamilyMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active");
    $("#forMyPrivateMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active");
    $("#forMyCorporateMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active");
    
    $(".navigation3__mega-menu__content__bar__header").removeClass(" navigation3__mega-menu__content__bar__header--active");
    $(".navigation3__mega-menu__content__bar__links").removeClass(" navigation3__mega-menu__content__bar__links--active");

  }  else if (args === 'myBusiness') {

    $("#segMyBMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMeMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyFMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyPMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyCMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--active").removeClass(" navigation3__mega-menu__content__bar--in-active"); 
    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyFamilyMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyPrivateMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyCorporateMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    
    $(".navigation3__mega-menu__content__bar__header").removeClass(" navigation3__mega-menu__content__bar__header--active");
    $(".navigation3__mega-menu__content__bar__links").removeClass(" navigation3__mega-menu__content__bar__links--active");
     
  } else if (args === 'myFamily') {

    $("#segMyFMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMeMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyBMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyPMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyCMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    
    $("#forMyFamilyMenu").addClass(" navigation3__mega-menu__content__bar--active").removeClass(" navigation3__mega-menu__content__bar--in-active"); 
    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyPrivateMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyCorporateMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    
    $(".navigation3__mega-menu__content__bar__header").removeClass(" navigation3__mega-menu__content__bar__header--active");
    $(".navigation3__mega-menu__content__bar__links").removeClass(" navigation3__mega-menu__content__bar__links--active");
     
  } else if (args === 'myPrivateBanking') {

    $("#segMyPMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMeMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyBMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyFMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyCMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    
    $("#forMyPrivateMenu").addClass(" navigation3__mega-menu__content__bar--active").removeClass(" navigation3__mega-menu__content__bar--in-active"); 
    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyFamilyMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyCorporateMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    
    $(".navigation3__mega-menu__content__bar__header").removeClass(" navigation3__mega-menu__content__bar__header--active");
    $(".navigation3__mega-menu__content__bar__links").removeClass(" navigation3__mega-menu__content__bar__links--active");
     
  } else {

    $("#segMyCMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active");
    $("#segMeMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyBMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyFMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    $("#segMyPMobile").addClass(" navigation3__mega-menu__segments__bar__segment__btn--in-active").removeClass(" navigation3__mega-menu__segments__bar__segment__btn--active");
    
    $("#forMyCorporateMenu").addClass(" navigation3__mega-menu__content__bar--active").removeClass(" navigation3__mega-menu__content__bar--in-active"); 
    $("#forMeMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyBusinessMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyFamilyMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    $("#forMyPrivateMenu").addClass(" navigation3__mega-menu__content__bar--in-active").removeClass(" navigation3__mega-menu__content__bar--active"); 
    
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
            $('.navigation3__navBar__menu__search__input').addClass('navigation3__navBar__menu__search__input--black');
            $('.navigation3__navBar__menu__group').addClass('navigation3__navBar__menu__group--black');
            $('.navigation3__navBar__menu__search').addClass('navigation3__navBar__menu__search--black');
            $('.navigation3__navBar__menu__login').addClass('navigation3__navBar__menu__login--black');
            $('.navigation3__navBar__menu__search__bg').addClass('navigation3__navBar__menu__search__bg--black');
          }
         else {
             $('.navigation3__navBar').removeClass('navigation3__navBar--black');
             $('.navigation3__navBar__menu__icon').removeClass('navigation3__navBar__menu__icon--black');
             $('.navigation3__navBar__menu__label1').removeClass('navigation3__navBar__menu__label1--black');
             $('.navigation3__navBar__menu__label2').removeClass('navigation3__navBar__menu__label2--black');
             $('.navigation3__navBar__menu__search__input').removeClass('navigation3__navBar__menu__search__input--black');
             $('.navigation3__navBar__menu__group').removeClass('navigation3__navBar__menu__group--black');
             $('.navigation3__navBar__menu__search').removeClass('navigation3__navBar__menu__search--black');
             $('.navigation3__navBar__menu__login').removeClass('navigation3__navBar__menu__login--black');
             $('.navigation3__navBar__menu__search__bg').removeClass('navigation3__navBar__menu__search__bg--black');
            }
   });

 function getCurrentScroll() {
     return window.pageYOffset || document.documentElement.scrollTop;
     }
 });

 // Login Menu
 function loginBtn() {
  
  if (loginState === false) {
   
    $('.navigation3__navBar').addClass('navigation3__navBar--login');
    $('.navigation3__navBar__menu__group').addClass('navigation3__navBar__menu__group--black');
    $("#login-menu").addClass(" navigation3__navBar__login-menu--active");
    $("#tint").addClass(" navigation3__navBar__menu__tint2--active");
    $("#Bg").addClass(" navigation3__navBar__menu__background2--active");
    $(".navigation3__navBar__menu__login__btn").addClass(" navigation3__navBar__menu__login__btn--in-active");
    $(".navigation3__navBar__menu__login__btn__close").addClass(" navigation3__navBar__menu__login__btn__close--active");
    $(".navigation3__navBar__menu__search").addClass(" navigation3__navBar__menu__search--in-active");
    loginState = true;
    
  } else {
    
    $('.navigation3__navBar').removeClass('navigation3__navBar--login');
    $('.navigation3__navBar__menu__group').removeClass('navigation3__navBar__menu__group--black');
    $("#login-menu").removeClass(" navigation3__navBar__login-menu--active");
    $("#tint").removeClass(" navigation3__navBar__menu__tint2--active");
    $("#Bg").removeClass(" navigation3__navBar__menu__background2--active");
    $(".navigation3__navBar__menu__login__btn").removeClass(" navigation3__navBar__menu__login__btn--in-active");
    $(".navigation3__navBar__menu__login__btn__close").removeClass(" navigation3__navBar__menu__login__btn__close--active");
    $(".navigation3__navBar__menu__search").removeClass(" navigation3__navBar__menu__search--in-active");
    loginState = false;

  }
  
};
    
 