document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value
    // let file = document.querySelector("#file").value
    let subject = document.getElementById("subject").value
    document.querySelector(".contact-form").reset();
    sendEmail(name, email, message, subject);
}

function sendEmail(name, email, message, subject) { 
    Email.send({ 
      // SecureToken: "162f5cea-b390-493e-af5f-867375ef8fc9", 
      Host: "smtp.gmail.com", 
      Username: "dministry356@gmail.com",
      Password: "dointuzewauuksld",
      To: "dministry35@gmail.com",
      From: "dministry356@gmail.com", 
      Subject: `${name}: ${subject}Sent you message`, 
      Body: `${name}: ${message}  ${email}`, 
      // Attachments: [ 
      //   { 
      //     name: `${file}.jpg`, 
      //     path: "Full Path of the file" 
      //   }] 
    }).then((message) => { 
        alert("Mail has been sent successfully");
      }); 
  } 
//  Counter
const counter = document.querySelectorAll('.counter');
const speed = 200;
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const inc = target / speed;

    if(count < target){
      counter.innerText = count + inc;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  }
  updateCount();
});