// alert("side-menu-ds");

var menuBtn = false;
var header = document.getElementById("ds__main__nav");
var btns = header.getElementsByClassName("ds__main__nav__links__main-section__heading");

// Menu Button
function menuTriger() {
      
  if (menuBtn === false) {
    $('.ds__main__nav__menu__icon').addClass(' ds__main__nav__menu__icon--active');
    $('.ds__main__nav__links').addClass(' ds__main__nav__links--active');
    $('.ds__main__content').addClass(' ds__main__content--menuOpen');
    $('.ds__main__cookies').addClass(' ds__main__cookies--menuOpen');
    menuBtn = true;

  }  else {
    $('.ds__main__nav__menu__icon').removeClass(' ds__main__nav__menu__icon--active');
    $('.ds__main__nav__links').removeClass(' ds__main__nav__links--active');
    $('.ds__main__content').removeClass(' ds__main__content--menuOpen');
    $('.ds__main__cookies').removeClass(' ds__main__cookies--menuOpen');
    menuBtn = false;
  } 

};

// Nav Menu
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    current = $(this);
    $(".ds__main__nav__links__main-section__heading").removeClass(" ds__main__nav__links__main-section__heading--active");
    current.addClass(" ds__main__nav__links__main-section__heading--active"); 
  });
};
