(function() {


  $(document).ready(function(){
  	  function setInvalid(id) {
  		$(id).css('background-color', 'rgb(247, 237, 237)');
  	    $(id).css('box-shadow', '0 0 5px rgb(203, 51, 59)');
  		$("#feilmelding").slideDown("slow");
  	  };
  	  function setValid(id) {
  		$(id).css('background-color', '');
  	    $(id).css('box-shadow', '');

  	};

  	       $("#sendFullmakt").click(function (event) {
  			    event.preventDefault()
  			    if (document.getElementById('signFile').innerHTML=='') {
  					alert('Du er nødt til å laste opp ett bilde av gyldig legitimasjon OG signaturen din for å få sendt inn søknaden.');
  				}else{
  			window.location.href = "fullmaktskjema5.html";
  			}
  		});

  		$('input[id^=fileInput2]').hide();
  			$('#photoSign').click(function (event) {
  			  event.preventDefault()
  			  console.log(this);
  		      $(this).closest('form').find('input[id^=fileInput2]').click();
      });

  			$('#fileInput2').bind('change', function() {
  			  var files = this.files;
  			  var i = 0;
  			  if(files.length>0)
           			$("#signFile").toggle(true);
  			  for(; i < files.length; i++) {
  				var filename = files[i].name;
  				$("#signFile").append(filename);
  			  }
  			});
  });
})();