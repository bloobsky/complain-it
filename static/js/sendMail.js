/*function sendMail(contactForm) {
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
*/

var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "gmail";
  var template_id = "project";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){ 
    	alert("We received your message! We try to respond in next 24hours. Stay patient!");
       myform.find("button").text("Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});