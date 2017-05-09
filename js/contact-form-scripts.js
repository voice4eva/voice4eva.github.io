/*
	AUTHOR: SYLVESTER KLIROWSKI
	GITHUB: https://github.com/voice4eva/
*/

$("#contactFormFR").submit(function (event) {
        event.preventDefault();
        submitForm();
        $("#contactFormFR")[0].reset();
        submitMSG(true, "Merci. Nous avons envoyé une confirmation à votre adresse e-mail. (Vérifiez le dossier spam si vous ne le voyez pas dans votre boîte de réception)");
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
        data: "message=" + message + "&name=" + name + "&email=" + email + "&phone=" + phone
    });

    $.ajax({
        type: "POST",
        url: "http://singyourcreativity.com/fr/php/contact-conf-email-fr.php",
        data: "message=" + message + "&name=" + name + "&email=" + email + "&phone=" + phone
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
