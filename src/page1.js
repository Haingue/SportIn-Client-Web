	$(document).ready(function(){
	$("#pageEnregistrer").hide();	
	$("#pageIdentifier").hide();
	$("#confirmer").hide();
	
    $("#enregistrer").click(function(){
		$("#page1").hide();
		$("#pageEnregistrer").show();				
	});
	
	$("#identifier").click(function(){
		$("#page1").hide();
		$("#pageIdentifier").show();			
	});

	$('#confimerE').click(function (event) {
  	$.ajax({
    url: "",
    data: {
        mail: 
    },

    type: "POST",
    dataType : "json",
    // Code to run if the request succeeds;
    // the response is passed to the function
    success: function( json ) {
        $( "<h1>" ).text( json.title ).appendTo( "body" );
        $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
    },



	});
  
    
