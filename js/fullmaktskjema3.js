(function() {


  $(document).ready(function(){
  if($("#missingDocsCheck").is(':checked')){
    $("#missingDocsContainer").toggle(true);
  }
  $('#missingDocsReason').find('input:text').each(function() {
     $("<textarea />").attr({ name: this.name, value: this.value }).insertBefore(this);
  }).remove();

       function setInvalid(id) {
    	$(id).css('background-color', 'rgb(247, 237, 237)');
        $(id).css('box-shadow', '0 0 5px rgb(203, 51, 59)');
        $(id).css('line-height', '1.38');
    	  $(id).css('border', '1px solid rgb(203, 51, 59)');
    	$("#feilmelding").slideDown("slow");
      };
      function setValid(id) {
    	$(id).css('background-color', '');
        $(id).css('box-shadow', '');
        $(id).css('line-height', '');
    	          $(id).css('border', '');
      };
    $("#missingDocsCheck").click(function () {
  	   $("#missingDocsContainer").toggle("slow");
    });

  $("#formPage4Button").click(function (event) {
  	    event.preventDefault()
        $("#feilmelding").toggle(false);
  	    var foundErrors = false;
  	    if(!$("#disclaimerCheck").is(':checked')){
  				foundErrors = true;
  				setInvalid('#disclaimerLabel');
  			}else{
  				setValid('#disclaimerLabel');
  			}
  	    if($("#missingDocsCheck").is(':checked')){
  		$('#uploadDocuments input[type=text]').each(function() {
  			 if(!$(this).val().trim()){
  				foundErrors = true;
  				setInvalid('#'+this.id);
  			}else{
  				setValid('#'+this.id);
  			}
  		});
  	}
  		if (document.getElementById('fileList').innerHTML=='') {
  			setInvalid('#uploadButton');
  			foundErrors = true;
  	}else{
  	  setValid('#uploadButton');
  	    }
  	    if(!foundErrors){
  		window.location.href = "fullmaktskjema4.html";
  	}else{
  			setTimeout(function(){ if(foundErrors){ $('html, body').animate({ scrollTop: 0 }, 'slow'); } }, 200);
  		}
  });
  $('input[id^=fileInput1]').hide();
  $('#uploadButton').click(function (event) {
  	event.preventDefault()
      console.log(this);
  	$(this).closest('form').find('input[id^=fileInput1]').click();
  });

  $('#fileInput1').bind('change', function() {
        var files = this.files;
        var i = 0;
        if(files.length>0)
           $("#fileList").toggle(true);
        for(; i < files.length; i++) {
  	var filename = files[i].name + "<br />";
  	$("#fileList").append(filename);
        }
    });
  });
})();