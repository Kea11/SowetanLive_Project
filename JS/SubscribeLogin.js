// This closes the Subscribe & Log In page

const close = document.querySelector('.close');

close.addEventListener('click', () => {
    window.history.back();
});



// This is the navbar navigation

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
})