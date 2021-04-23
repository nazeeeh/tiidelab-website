//listen to click button
document.querySelector('.newsletter').addEventListener('submit', formSubmit);

function formSubmit(e){
    e.preventDefault()
    let email = document.getElementById("email").value;
    document.querySelector(".newsletter").reset();

    sendMail(email);
}

function sendMail(email){
    Email.send({
        Host: "smtp.outlook.com",
        Username: "hi@tiidelab.com",
        password: 'bwwclzpcdyjjfpbq',
        To: 'hi@tiidelab.com',
        From: `${email}`,
        Subject: `${email} sent you a message`,
    }).then((msg) => swal({
        title: "Great!",
        text: "You have successfully signed up to our newsletters.",
        icon: "success",
        button: {
            confirm: 'Ok' , className: 'sweet-confirm'
        }
      })
      )
}