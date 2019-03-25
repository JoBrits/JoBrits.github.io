
$(document).ready(function(){
  $('.navigation').load("../symbols/layout/navigation.html");

  $('.navigation2').load("../symbols/layout/navigation2.html");
  $('.navigation3').load("../symbols/layout/navigation3.html");
  
  $('.navigation_business').load("../symbols/layout/navigation_business.html");
  $('.navigation_private').load("../symbols/layout/navigation_private.html");
  $('.navigation_corporate').load("../symbols/layout/navigation_corporate.html");
  
  $('.footer').load("../symbols/layout/footer.html");
  
  // One level deeper fallback
  
  $('.navigation').load("../../symbols/layout/navigation.html");
  
  $('.navigation2').load("../../symbols/layout/navigation2.html");
  $('.navigation3').load("../../symbols/layout/navigation3.html");
  
  $('.navigation_business').load("../../symbols/layout/navigation_business.html");
  $('.navigation_private').load("../../symbols/layout/navigation_private.html");
  $('.navigation_corporate').load("../../symbols/layout/navigation_corporate.html");
  
  $('.footer').load("../../symbols/layout/footer.html");

  $('.navigationDs').load("../symbols/layout/navigationDs.html");
});
