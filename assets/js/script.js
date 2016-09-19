

$( ".button" ).on( "click", function() {
  $( ".header" ).toggleClass("headerToggle");
});

//fonction de soumission du formulaire avec un onclick sur le boutton submit
/*function submitForm(){
    var form = document.forms["formsubmit"];
    var nom = form.nom.value;
    var prenom = form.nom.value; 
    var url = nom + " " + prenom
    if (nom != "" && prenom != "") {
    	alert("Données saisies: " + url);
   
    } else{
    	alert("Remplissez le formulaire");
    }                          
}
*/

 $("form").submit(function( event ) {
  var nom = $("#nom").val();
  var prenom = $("#prenom").val();

  if ( $( "input" ).val() !== "" ) {
    alert("Données saisies "+ nom + " " + prenom);
  }else{
  	alert("Remplissez le formulaire");
  }
 
  
});
