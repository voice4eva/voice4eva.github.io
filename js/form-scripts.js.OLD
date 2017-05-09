$("#contactForm").submit(function (event) {
        event.preventDefault();
        submitForm();
        $("#contactForm")[0].reset();
        submitMSG(true, "Votre message a bien été envoyé! Merci. Nous vous contacterons bientôt.")
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var phone = $("#phone").val();

    $.ajax({
        type: "POST",
        url: "http://singyourcreativity.com/php/form-process.php",
        data: "name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + message
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "alert alert-success text-center tada animated";
    } else {
        var msgClasses = "alert alert-danger text-center tada animated";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
