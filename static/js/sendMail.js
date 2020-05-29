function sendMail(contactForm) {
    emailjs.send("gmail", "project", {
       "from_name": contactForm.firstname.value,
       "from_lastname": contactForm.lastname.value, 
       "from_email": contactForm.email.value,
       "tel_number": contactForm.tel.value,
       "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("Success", response)
        },
        function(error) {
            console.log("Failed", error)
        })
    return false;
}