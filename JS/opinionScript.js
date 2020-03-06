// This is the navbar navigation

const pressed = document.querySelector('.navbar');
const opened = document.getElementById('bar');
const close = document.querySelector('.close');
const logo = document.querySelector('.log');


// pressed.addEventListener('click',()=>{
//    opened.style.backgroundColor = 'white';
//    opened.style.display = 'block';
//    close.style.display = 'block';
//    pressed.style.display = 'none';
//    logo.style.display = 'none';
// });

// close.addEventListener('click',()=> {
//     window.history.back();
// });

const back = document.querySelector('#return');

// back.addEventListener('click', () => {
//     window.location = 'OpinionPage.html';
// });


const nav = document.querySelector('.navbar');
const test = document.querySelector('.drop');

// test.style.display = 'none';

// nav.addEventListener('click', () => {
//     test.style.display = 'block';
// });



// const head = document.querySelector('.header');
// const page = document.querySelector('.opinionContent');
// const foot = document.querySelector('.footer');
// const signUp = document.querySelector('.signUp');
// const register = document.querySelector('#register');

// head.style.display = 'none';
// page.style.display = 'none';
// foot.style.display = 'none';

// register.addEventListener('click', () => {
//     head.style.display = 'block';
//     page.style.display = 'block';
//     foot.style.display = 'block';
//     signUp.style.display = 'none';
// });




// Log out

// const dropDowns = document.querySelector('.arrowLogOut');
// const show = document.querySelector('#myDropdown');

// dropDowns.addEventListener('click',()=>{
//     show.style.display = "block";
// });

// show.addEventListener('click', ()=>{
//     window.location = "logIn.html";
// });


//Get the button
// var mybutton = document.getElementById("myBtn");
// const button = document.querySelector('.RegClass');

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }


// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// button.addEventListener('click',()=>{
//   window.location.href = 'goodlifeWithLifestyleBlogs.html'
// });


// --------------------------------------------------------------

// Testing
const btn = document.querySelector('button');
const form = document.querySelector('.loginForm');
const email = document.querySelector('.email');
const password = document.querySelector('#LogPass');



let savedEmail = localStorage.getItem('email');
let savedPass = localStorage.getItem('LogPass');

form.addEventListener('keyup', e => {
  e.preventDefault();
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
});



// Show password
function myFunction() {
  var x = document.getElementById("LogPass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
} 
