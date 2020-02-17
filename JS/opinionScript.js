// This is the navbar navigation

const pressed = document.querySelector('.navbar');
const opened = document.getElementById('bar');
const close = document.querySelector('.close');
const logo = document.querySelector('.log');


pressed.addEventListener('click',()=>{
   opened.style.backgroundColor = 'white';
   opened.style.display = 'block';
   close.style.display = 'block';
   pressed.style.display = 'none';
   logo.style.display = 'none';
});

close.goBack('click',()=> {
window.location = 'OpinionPage.html';
});

const back = document.querySelector('.back1');

back.addEventListener('click',()=>{
    window.history.back();
});


// const nav = document.querySelector('.navbar');
// const test = document.querySelector('.drop');

// test.style.display = 'none';

// nav.addEventListener('click', () => {
//     test.style.display = 'block';
// });
