document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let message = document.querySelector("#message").value
    document.querySelector(".contact-form").reset();
    // sendEmail(name, email, message);
}

function sendEmail(name, email, message) { 
    Email.send({ 
      Host: "smtp.gmail.com", 
      Username: "dministry356@gmail.com", 
      Password: "sjinzzhhhloumuig", 
      To: "dministry356@gmail.com",
      From: "dministry356@gmail.com", 
      Subject: `${name}: ${email}`, 
      Body: `${message}`, 
      Attachments: [ 
        { 
          name: "File_Name_with_Extension", 
          path: "Full Path of the file" 
        }] 
    }).then(function (message) { 
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