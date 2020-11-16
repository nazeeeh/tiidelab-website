document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let message = document.querySelector("#message").value
    let file = document.querySelector("#file").value
    let subject = document.querySelector("#subject").value
    document.querySelector(".contact-form").reset();
    // sendEmail(name, email, message, file, subject);
}

function sendEmail(name, email, message, file, subject) { 
    Email.send({ 
      // SecureToken: "162f5cea-b390-493e-af5f-867375ef8fc9", 
      Host: "smtp.gmail.com", 
      Username: "dministry356@gmail.com",
      Password: "dointuzewauuksld",
      To: "dministry356@gmail.com",
      From: "dministry356@gmail.com", 
      Subject: `${subject}`, 
      Body: `${name}: ${message}\n${email}`, 
      Attachments: [ 
        { 
          name: `${file}.jpg`, 
          path: "Full Path of the file" 
        }] 
    }).then(function (message) { 
        alert("Mail has been sent successfully");
      }); 
      sendEmail(name, email, message, file, subject);
  } 
  sendEmail(name, email, message, file, subject);

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