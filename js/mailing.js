//Listen to the form
document.querySelector(".contact-form").addEventListener("submit", submitForm);

//function to submit form
function submitForm(e){
    e.preventDefault();
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value
    let subject = document.getElementById("subject").value
    document.querySelector(".contact-form").reset();
    
    sendEmail(name, email, message, subject);
}

function sendEmail(name, email, subject, message) {
    Email.send({
        Host: "smtp.outlook.com",
        Username: "hi@tiidelab.com",
        password: 'bwwclzpcdyjjfpbq',
        To: 'hi@tiidelab.com',
        From: `${email}`,
        Subject: `${name} sent you a message`,
        Body: ` Name: ${name} <br/> Email: ${email} <br/> Subject: ${subject} <br/> Message: ${message}`
    }).then((msg) => swal({
        title: "Great!",
        text: "We will get back to you in less than 24hours!",
        icon: "success",
        button: {
            confirm: 'Ok' , className: 'sweet-confirm'
        }
      })
      )
    // console.log(`${name} ${email} ${subject} ${message}`)
}

