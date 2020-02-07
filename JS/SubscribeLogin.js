// const subLog = document.querySelector('.user');
// const drop = document.querySelector('.container');

// subLog.addEventListener('click', () => {
//     drop.style.display = 'block';
// });




const close = document.querySelector('.close');

close.addEventListener('click', () => {
    window.history.back();
});




const nav = document.querySelector('.navbar');
const test = document.querySelector('.drop');

test.style.display = 'none';

nav.addEventListener('click', () => {
    test.style.display = 'block';
})