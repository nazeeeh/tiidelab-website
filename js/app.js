
  var slider = tns({
    container: '.my-slider',
    items: 1,
    "autoplay": true,
    "mode": 'carousel',
    "controlsText": ["<", ">"],
    "controlsPosition": 'bottom',
    "navPosition":'bottom',
    "navContainer": false,
    "nav": false,
    "autoplayPosition": 'top',
    "autoplayTimeout": 4000,
    "speed": 500,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 10
      },
      900: {
        items: 3
      }
    }
  });
  

// function sendEmail(name, email, message, subject) { 
//     Email.send({ 
//       SecureToken: "162f5cea-b390-493e-af5f-867375ef8fc9", 
//       Host: "smtp.gmail.com", 
//       Username: "dministry356@gmail.com",
//       Password: "dointuzewauuksld",
//       To: "dministry35@gmail.com",
//       From: "dministry356@gmail.com", 
//       Subject: `${name}: ${subject}Sent you message`,
//       Body: `${name}: ${message}  ${email}`,
//       Attachments: [ 
//         { 
//           name: `${file}.jpg`, 
//           path: `https://tiidelab-website.netlify.app/pages/volunteer.html/${file}.jpg` 
//         }] 
//     }).then((message) => { 
//         alert("Mail has been sent successfully");
//       }); 
//   } 
//  Counter
// const counter = document.querySelectorAll('.counter');
// const speed = 200;
// counters.forEach(counter => {
//   const updateCount = () => {
//     const target = +counter.getAttribute('data-target');
//     const count = +counter.innerText;

//     const inc = target / speed;

//     if(count < target){
//       counter.innerText = count + inc;
//       setTimeout(updateCount, 1);
//     } else {
//       count.innerText = target;
//     }
//   }
//   updateCount();
// });
