// This is the click event for the user icon on the far right

const subLog = document.querySelector('.user');

subLog.addEventListener('click', () => {
    window.location.href = 'SubscribePg.html';
});





const pressed = document.getElementById('bar');
const opened = document.getElementById('open')

pressed.addEventListener('click',()=>{
   opened.style.backgroundColor = 'white';
});



const nav = document.querySelector('.navbar');
const test = document.querySelector('.drop');

test.style.display = 'none';

nav.addEventListener('click', () => {
    test.style.display = 'block';
});
