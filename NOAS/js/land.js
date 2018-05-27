(function() {


  $(document).ready(function(){
      $("#nabolandButton").click(function(){
        if ( $("#nabolandContent").is(":visible") ) {
           $("#nabolandContent").slideUp("fast");
        } else { 
           $("#nabolandContent").slideDown("fast"); 
        }
      });
  });
})();