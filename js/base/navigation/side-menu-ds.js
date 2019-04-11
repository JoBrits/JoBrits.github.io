// alert("side-menu-ds");

var menuBtn = false;

// Menu Button
function menuTriger() {
      
  if (menuBtn === false) {
    $('.ds__main__nav__menu__icon').addClass(' ds__main__nav__menu__icon--active');
    $('.ds__main__nav__links').addClass(' ds__main__nav__links--active');
    $('.ds__main__content').addClass(' ds__main__content--menuOpen');
	menuBtn = true;

  }  else {
    $('.ds__main__nav__menu__icon').removeClass(' ds__main__nav__menu__icon--active');
    $('.ds__main__nav__links').removeClass(' ds__main__nav__links--active');
    $('.ds__main__content').removeClass(' ds__main__content--menuOpen');
    menuBtn = false;
  } 

};