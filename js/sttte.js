(function() {


    $(document).ready(function(){

            $("#clickGift .checkbox").click(function () {
  //			  alert("containerMembership: "+$("#containerMembership").is(":visible")+" containerGift: "+$("#containerGift").is(":visible"))
      		  if ( !$("#containerMembership").is(":visible") && !$("#containerGift").is(":visible")){
  //Ingen vises - Vis gave og betaling
  //alert("If 1");
  				$("#containerGift").slideDown("slow");
      		    $("#paymentOptions").slideDown("slow");
              $("#buttonNoPay").slideUp("slow");
              $("#buttonPay").slideDown("slow");
      		    return;
      		  }
      		  if ( $("#containerMembership").is(":visible") && $("#containerGift").is(":visible")){
  //Begge vises - fjern gave
  //alert("If 2");
  			  	$("#containerGift").slideUp("slow");
  			  	return;
      		  }
      		  if ( !$("#containerMembership").is(":visible") && $("#containerGift").is(":visible")){
  //Viser kun gave - fjern gave og betaling
  //alert("If 3");
  				$("#containerGift").slideUp("slow");
  				$("#paymentOptions").slideUp("slow");
              $("#buttonNoPay").slideDown("slow");
              $("#buttonPay").slideUp("slow");
  				return;
      		  }
  			  if ( $("#containerMembership").is(":visible") && !$("#containerGift").is(":visible")){
  			  //Viser kun medlem - fjern medlem og betaling
  			  //alert("If 3");
  				$("#containerGift").slideDown("slow");
  				return;
  		  }
            });
            $("#clickMembership .checkbox").click(function () {
  //			  alert("containerMembership: "+$("#containerMembership").is(":visible")+" containerGift: "+$("#containerGift").is(":visible"))
  		  if ( !$("#containerMembership").is(":visible") && !$("#containerGift").is(":visible")){
  //Ingen vises - Vis medlem og betaling
  //alert("If 1");
  			$("#containerMembership").slideDown("slow");
  			$("#paymentOptions").slideDown("slow");
          $("#buttonNoPay").slideUp("slow");
              $("#buttonPay").slideDown("slow");
  			return;
  		  }
  		  if ( $("#containerMembership").is(":visible") && $("#containerGift").is(":visible")){
  //Begge vises - fjern medlem
  //alert("If 2");
  			$("#containerMembership").slideUp("slow");

  			return;
  		  }
  		  if ( $("#containerMembership").is(":visible") && !$("#containerGift").is(":visible")){
  //Viser kun medlem - fjern medlem og betaling
  //alert("If 3");
  			$("#containerMembership").slideUp("slow");
  			$("#paymentOptions").slideUp("slow");
          $("#buttonNoPay").slideDown("slow");
              $("#buttonPay").slideUp("slow");
  			return;
  		  }
  		  if ( !$("#containerMembership").is(":visible") && $("#containerGift").is(":visible")){
  		  //Viser kun medlem - fjern medlem og betaling
  		  //alert("If 3");
  			$("#containerMembership").slideDown("slow");
  			return;
  		  }
            });
        });
})();