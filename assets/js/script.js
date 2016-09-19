

$( ".button" ).on( "click", function() {
  $( ".header" ).toggleClass("headerToggle");
});

//fonction de soumission du formulaire avec un onclick sur le boutton submit
/*function submitForm(){
    var form = document.forms["formsubmit"];
    var firstname = form.firstname.value;
    var lastname = form.lastname.value; 
    var url = firstname + " " + lastname
    if (firstname != "" && lastname != "") {
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