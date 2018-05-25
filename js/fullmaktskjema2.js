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
      if($("#kontaktCheck").is(':checked')){
        $("#kontaktContainer").toggle(true);
      }
        var regExOnlyNumbers = "[0-9]";
        inputField2 = $("input[name^='postnummer2']");
        outputElement2 = $("input[name^='poststed2']");
        outputElement2.attr("tabindex",0);
        inputFieldAdvokatmail = $("input[name^='advokatmail']");
        $("#zipcode2").attr('maxlength','4');

  inputField2.focusout(function() {
    		if (inputField2.val().length < 4 || !inputField2.val().match(regExOnlyNumbers)) {
    	      setInvalidNoError('#zipcode2');
    		}
     });

  inputFieldAdvokatmail.focusout(function() {
       if (!isValidEmailAddress(inputFieldAdvokatmail.val())){
  		setInvalidNoError('#advokatmail');
  	}
     });
     inputFieldAdvokatmail.keyup(function() {
       if (isValidEmailAddress(inputFieldAdvokatmail.val())){
  		setValid('#advokatmail');
  	}
  	});
  $('#advokatnavn').keyup(function() {
  	   if($('#advokatnavn').val()!='')
  	      setValid(this);
     });
        $('#advokattlf').keyup(function() {
     	   if($('#advokattlf').val()!='')
     	      setValid(this);
     });
     $('#kontaktnavn').keyup(function() {
     	   if($('#kontaktnavn').val()!='')
     	      setValid(this);
        });
           $('#kontakttlf').keyup(function() {
        	   if($('#kontakttlf').val()!='')
        	      setValid(this);
     });
        $('#relationship').keyup(function() {
        	   if($('#relationship').val()!='')
        	      setValid(this);
           });
  $('#kontaktadr').keyup(function() {
           	   if($('#kontaktadr').val()!='')
           	      setValid(this);
     });

    inputField2.focusout(function() {
    		if (inputField2.val().length < 4 || !inputField2.val().match(regExOnlyNumbers)) {
    	       setInvalidNoError('#zipcode2');
    		}
     });
      inputField2.keyup(function() {
      		if (inputField2.val().length < 4) {
      			setValid('#zipcode2');
      		}
      		if (inputField2.val().length > 4 || (!inputField2.val().match(regExOnlyNumbers) && inputField2.val()!="")) {
      		  setInvalidNoError('#zipcode2');
      		}
      	    if (inputField2.val().length == 4) {
      	      $.getJSON('http://fraktguide.bring.no/fraktguide/postalCode.json?pnr='+ inputField2.val() +'&callback=?',
      	      function(data){
      			if (data.result!='Ugyldig postnummer'){
      				outputElement2.val(data.result);
      				outputElement2.parent().find("label_not").hide();
      				setValid('#zipcode2');
      				setValid('#place2');
      			} else {
      				setInvalidNoError('#zipcode2');
      			}
      	      });
         }
         else {
        outputElement2.val('');
         }
      });

        $("#kontaktCheck").click(function () {
      	   $("#kontaktContainer").toggle("slow");
        });

             $("#formPage3Button").click(function (event) {
      		    event.preventDefault()
              $("#feilmelding").toggle(false);
      		    var foundErrors = false;
      		    $('#lawyerInfo .container .container input[type=text]').each(function() {
      			 if(!$(this).val().trim()){
      				foundErrors = true;
      				setInvalid('#'+this.id);
      			}else{
      				setValid('#'+this.id);
      			}
      			});
      			if (!isValidEmailAddress(inputFieldAdvokatmail.val())){
      				setInvalid('#advokatmail');
      			foundErrors = true;
      			}else{
      				setValid('#advokatmail');
      			}
      		    if($("#kontaktCheck").is(':checked')){
      			$('#kontaktContainer div input[type=text]').each(function() {
      				 if(!$(this).val().trim()){
      					foundErrors = true;
      					setInvalid('#'+this.id);
      				}else{
      					setValid('#'+this.id);
      				}
      				if (inputField2.val().length != 4){
  							setInvalid('#zipcode2');
  							foundErrors = true;
  					}else{
  					  setValid("#zipcode2");
      				}

      		    });
      			}
      		    if(!foundErrors){
      			window.location.href = "fullmaktskjema3.html";
      		}else{
      				setTimeout(function(){ if(foundErrors){ $('html, body').animate({ scrollTop: 0 }, 'slow'); } }, 200);
      			}
             });


      });
})();