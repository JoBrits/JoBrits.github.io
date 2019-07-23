$(document).ready(function(){
  // DS
  $('#ds__main__nav').load("../symbols/base/navigation/ds-menu.html");

  // GRID
  $('#gridMenu').load("../../symbols/base/grid-menu.html"); 
  $('#gridLinesPage').load("../../symbols/base/grid-lines-p.html"); 
  $('#gridLinesSection').load("../../symbols/base/grid-lines-s.html");
  $('#gridColumns3').load("../../symbols/base/grid-columns-3.html");
  $('#gridColumns4').load("../../symbols/base/grid-columns-4.html");
  $('#gridColumns12').load("../../symbols/base/grid-columns-12.html");
    
  // FNB
  // menu
  $('#fnbNavigation').load("../../symbols/layout/fnb-navigation.html"); 

  // components
  $('#btnLogin').load("../../symbols/components/btn-login.html"); 


  //footer 
  $('#footer').load("../../symbols/layout/footer.html");

});

$(document).ready(function(){
  // DS one level deeper
  $('#ds__main__nav').load("../../symbols/base/navigation/ds-menu.html");
  //footer
  $('#footer').load("../../../symbols/layout/footer.html");
  
});
 