(function() {


   $(document).ready(function(){
  		$("#imedia_innhold").css('background-color', 'rgb(212, 212, 212');
          $("#ressurser_innhold").css('background-color', 'rgb(212, 212, 212');
  		$("#aktuelt_innhold").css('background-color', 'rgb(255, 255, 255');

          $("#aktuelt_innhold").click(function () {
             $("#imedia_content").slideUp("slow");
             $("#ressurser_content").slideUp("slow");
             $("#aktuelt_content").slideDown("slow");
             $("#aktuelt_innhold").css('background-color', 'rgb(255, 255, 255');
             $("#imedia_innhold").css('background-color', 'rgb(212, 212, 212');
             $("#ressurser_innhold").css('background-color', 'rgb(212, 212, 212');

          });
          $("#ressurser_innhold").click(function () {
                   $("#imedia_content").slideUp("slow");
      	         $("#ressurser_content").slideDown("slow");
             $("#aktuelt_content").slideUp("slow");
             $("#aktuelt_innhold").css('background-color', 'rgb(212, 212, 212');
    		          $("#imedia_innhold").css('background-color', 'rgb(212, 212, 212');
             $("#ressurser_innhold").css('background-color', 'rgb(255, 255, 255');

          });
          $("#imedia_innhold").click(function () {
                   $("#imedia_content").slideDown("slow");
      	         $("#ressurser_content").slideUp("slow");
             $("#aktuelt_content").slideUp("slow");
             $("#aktuelt_innhold").css('background-color', 'rgb(212, 212, 212');
    		          $("#imedia_innhold").css('background-color', 'rgb(255, 255, 255');
             $("#ressurser_innhold").css('background-color', 'rgb(212, 212, 212');

          });
       });
})();