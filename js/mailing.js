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
        Host: "smpt.gmail.com",
        Username: "nazihahmed55@gmail.com",
        password:

    })
}