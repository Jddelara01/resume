function sendMail(contactForm) {
    emailjs.send("service_r7gasmr", "template_g84hl53", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.questionsummary.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    contactForm.reset();
    return false;
}