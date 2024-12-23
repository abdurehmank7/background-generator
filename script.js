let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("main-body-html");

// console.log(css);
// console.log(color1);
// console.log(color2);

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
    css.textContent = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
    
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);




// color1.addEventListener('input', function () {
    
//     // body.style.background = color1.value;
//     body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
//     // console.log(color1.value);
// });


// color2.addEventListener('input', function () {
//     // console.log(color1.value);
//     // body.style.background = color2.value;

//     body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;

// });
