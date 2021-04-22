
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
