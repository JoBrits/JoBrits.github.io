var menuBtn = false;
var segments = document.getElementById("segments");
var segBtns = segments.getElementsByClassName("fnb-navigation__megaMenu__segments__segment__btn");


// Menu Button
function menuTriger() {
    
    if (menuBtn === false) {
        $('.fnb-navigation__burgerMenu__icon').addClass(' fnb-navigation__burgerMenu__icon--active');
        $('.fnb-navigation__burgerMenu__label__menu').addClass(' fnb-navigation__burgerMenu__label__menu--inActive');
        $('.fnb-navigation__burgerMenu__label__close').addClass(' fnb-navigation__burgerMenu__label__close--active');
        $('.fnb-navigation__megaMenu').addClass(' fnb-navigation__megaMenu--active');
        $('.fnb-navigation__megaMenu__left').addClass(' fnb-navigation__megaMenu__left--active');
        $('.fnb-navigation__megaMenu__right').addClass(' fnb-navigation__megaMenu__right--active');
        $('#landingForm').addClass(' landing__form--inActive');

      
        menuBtn = true;
   
    }  else {
        $('.fnb-navigation__burgerMenu__icon').removeClass(' fnb-navigation__burgerMenu__icon--active');
        $('.fnb-navigation__burgerMenu__label__menu').removeClass(' fnb-navigation__burgerMenu__label__menu--inActive');
        $('.fnb-navigation__burgerMenu__label__close').removeClass(' fnb-navigation__burgerMenu__label__close--active');
        $('.fnb-navigation__megaMenu').removeClass(' fnb-navigation__megaMenu--active');
        $('.fnb-navigation__megaMenu__left').removeClass(' fnb-navigation__megaMenu__left--active');
        $('.fnb-navigation__megaMenu__right').removeClass(' fnb-navigation__megaMenu__right--active');
        $('#landingForm').removeClass(' landing__form--inActive');

      
        menuBtn = false; 
    } 
   
}; 


// Segemnts Menu
for (var i = 0; i < segBtns.length; i++) {
    segBtns[i].addEventListener("click", function() {
    current = $(this);

    $('.fnb-navigation__megaMenu__segments__segment__btn').removeClass(' fnb-navigation__megaMenu__segments__segment__btn--active');
    current.addClass(' fnb-navigation__megaMenu__segments__segment__btn--active'); 

    });
};

// Segment Menu - Segements
function segmentTriger(args) {
    
    if (args === 'me') {
        
        $("#segMe").addClass("  fnb-navigation__megaMenu__products--active"  ).removeClass(" fnb-navigation__megaMenu__products--inActive");
        
        $("#segMyB").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
        $("#segMyF").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
        $("#segMyP").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
        $("#segMyC").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
    
      }  else if (args === 'myBusiness') {
          
        $("#segMyB").addClass("  fnb-navigation__megaMenu__products--active"  ).removeClass(" fnb-navigation__megaMenu__products--inActive");
        
        $("#segMe").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
        $("#segMyF").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
        $("#segMyP").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
        $("#segMyC").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
     
      } else if (args === 'myFamily') {
          
        $("#segMyF").addClass("  fnb-navigation__megaMenu__products--active"  ).removeClass(" fnb-navigation__megaMenu__products--inActive");
        
        $("#segMe").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
        $("#segMyB").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
        $("#segMyP").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
        $("#segMyC").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
      
      } else if (args === 'myPrivateBanking') {
          
        $("#segMyP").addClass("  fnb-navigation__megaMenu__products--active"  ).removeClass(" fnb-navigation__megaMenu__products--inActive");
        
        $("#segMe").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
        $("#segMyB").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
        $("#segMyF").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
        $("#segMyC").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
      
      } else {
          
        $("#segMyC").addClass("  fnb-navigation__megaMenu__products--active"  ).removeClass(" fnb-navigation__megaMenu__products--inActive");
        
        $("#segMe").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
        $("#segMyB").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
        $("#segMyF").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active");
        $("#segMyP").addClass(" fnb-navigation__megaMenu__products--inActive").removeClass(" fnb-navigation__megaMenu__products--active"); 
    
    };
    
}
  