/*
	AUTHOR: SYLVESTER KLIROWSKI
	GITHUB: https://github.com/voice4eva/
*/

$("#contactFormFR").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Avez-vous rempli le formulaire correctement?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var message = $("#message").val();
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();

    $.ajax({
        type: "POST",
        url: "http://singyourcreativity.com/fr/php/form-process-fr.php",
        data: "message=" + message + "&name=" + name + "&email=" + email + "&phone=" + phone,
        success : function(text){
            if (text == "passed"){
                formSuccess();
                sendConfEmail(message, name, email, phone);
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactFormFR")[0].reset();
    submitMSG(true, "Merci. Nous avons envoyé une confirmation à votre adresse e-mail. (Vérifiez le dossier spam si vous ne le voyez pas dans votre boîte de réception)");
}

function formError(){
    $("#contactFormFR").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "alert alert-success text-center col-sm-10 col-sm-offset-2";
    } else {
        var msgClasses = "alert alert-danger text-center col-sm-10 col-sm-offset-2";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

function sendConfEmail(message, name, email, phone){
  $.ajax({
      type: "POST",
      url: "http://singyourcreativity.com/fr/php/contact-conf-email-fr.php",
      data: "message=" + message + "&name=" + name + "&email=" + email + "&phone=" + phone
  });
}
