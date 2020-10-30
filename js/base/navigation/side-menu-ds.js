// alert("side-menu-ds");

var menuBtn = false;
var header = document.getElementById("ds__main__nav");
var btns = header.getElementsByClassName("ds__main__nav__links__main-section__heading");

// Menu Button
function menuTriger() {
      
  if (menuBtn === false) {
    $('.menu__main__nav').addClass(' menu__main__nav--active');
    $('.menu__main__nav__menu__icon').addClass(' menu__main__nav__menu__icon--active');
    $('.menu__main__nav__links').addClass(' menu__main__nav__links--active');
    $('.main').addClass(' main__menuOpen');
    menuBtn = true;

  }  else {
    $('.menu__main__nav').removeClass(' menu__main__nav--active');
    $('.menu__main__nav__menu__icon').removeClass(' menu__main__nav__menu__icon--active');
    $('.menu__main__nav__links').removeClass(' menu__main__nav__links--active');
    $('.main').removeClass(' main__menuOpen');
    menuBtn = false;
  } 

};

// Nav Menu
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    current = $(this);
    $(".menu__main__nav__links__main-section__heading").removeClass(" menu_main__nav__links__main-section__heading--active");
    current.addClass(" menu__main__nav__links__main-section__heading--active"); 
  });
};
