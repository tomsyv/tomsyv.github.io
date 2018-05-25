(function() {


  $(document).ready(function(){
        function isValidEmailAddress(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };
        function setInvalid(id) {
      	setInvalidNoError(id);
      	$("#feilmelding").slideDown("slow");
        };
        function setInvalidNoError(id) {
  	      	$(id).css('background-color', 'rgba(203, 51, 59, 0.1');
  	          $(id).css('box-shadow', '0 0 5px rgb(203, 51, 59)');
  	          $(id).css('line-height', '1.38');
  	          $(id).css('border', '1px solid rgb(203, 51, 59)');
        };
        function setValid(id) {
      	$(id).css('background-color', '');
          $(id).css('box-shadow', '');
          $(id).css('line-height', '');
  		$(id).css('border', '');
      };

        var regExOnlyNumbers = "[0-9]";
        inputField1 = $("input[name^='postnummer1']");
        outputElement1 = $("input[name^='poststed1']");
        outputElement1.attr("tabindex",0);
        inputFieldEmail = $("input[name^='epost']");
        inputDUF = $("input[name^='duf']");
      $("#duf").attr('maxlength','12');
      $("#zipcode1").attr('maxlength','4');

      inputDUF.focusout(function() {
    		if (inputDUF.val().length < 12) {
    	      setInvalidNoError('#duf');
    		}
     });
     inputDUF.keyup(function() {
       		if (inputDUF.val().length == 12 && inputDUF.val().match(regExOnlyNumbers)) {
       			setValid('#duf');
      		}
    });
    inputField1.focusout(function() {
    		if (inputField1.val().length < 4 || !inputField1.val().match(regExOnlyNumbers)) {
    	      setInvalidNoError('#zipcode1');
    		}
     });
       inputFieldEmail.focusout(function() {
       if (!isValidEmailAddress(inputFieldEmail.val())){
  		setInvalidNoError('#epost');
  	}
     });
     inputFieldEmail.keyup(function() {
       if (isValidEmailAddress(inputFieldEmail.val())){
  		setValid('#epost');
  	}
    });
     $('#navn').keyup(function() {
  	   if($('#navn').val()!='')
  	      setValid(this);
     });
        $('#land').keyup(function() {
     	   if($('#land').val()!='')
     	      setValid(this);
     });
        $('#gatenavn').keyup(function() {
     	   if($('#gatenavn').val()!='')
     	      setValid(this);
     });
        $('#tlf').keyup(function() {
     	   if($('#tlf').val()!='')
     	      setValid(this);
     });
      inputField1.keyup(function() {
      		if (inputField1.val().length < 4) {
      			setValid('#zipcode1');
      		}
      		if (inputField1.val().length > 4 || (!inputField1.val().match(regExOnlyNumbers) && inputField1.val()!="")) {
      		  setInvalidNoError('#zipcode1');
      		}
      	    if (inputField1.val().length == 4) {
      	      $.getJSON('http://fraktguide.bring.no/fraktguide/postalCode.json?pnr='+ inputField1.val() +'&callback=?',
      	      function(data){
      			if (data.result!='Ugyldig postnummer'){
      				outputElement1.val(data.result);
      				outputElement1.parent().find("label_not").hide();
      				setValid('#zipcode1');
      				setValid('#place1');
      			} else {
      				setInvalidNoError('#zipcode1');
      			}
      	      });
         }
         else {
        outputElement1.val('');
         }
      });



      $("#formPage1Button").click(function (event) {
      	    event.preventDefault()
      	    $("#feilmelding").toggle(false);
      	     var foundErrors = false;
      	     $('#personalInfo input[type=text]').each(function() {
      		     if(!$(this).val().trim()){
      			foundErrors = true;
      			setInvalid('#'+this.id);
      			}else{
      				setValid('#'+this.id);
      			}
      		});
      			  if (!inputDUF.val().match(regExOnlyNumbers) || inputDUF.val().length != 12){
      				setInvalid('#duf');
      				foundErrors = true;
      		}else{
      		  setValid('#duf');
      		}
      		if (!isValidEmailAddress(inputFieldEmail.val())){
      			setInvalid('#epost');
      			foundErrors = true;
      		}else{
      			setValid('#epost');
      		}
      		if (inputField1.val().length != 4){
    		  				setInvalid('#zipcode1');
    		  				foundErrors = true;
    		  		}else{
    		  		  setValid("#zipcode1");
      		}
      		if(!foundErrors){
      			    window.location.href = "fullmaktskjema2.html";
      	   }else{
      		   setTimeout(function(){ if(foundErrors){ $('html, body').animate({ scrollTop: 0 }, 'slow'); } }, 200);
      	  }
             });

      });
})();