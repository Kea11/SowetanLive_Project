// const firstPg = document.querySelector('.op1');
// const secondPg = document.querySelector('.op2');
// const clicked = document.getElementById('letpic');

// clicked.addEventListener('click', () => {
//     window.location.href = "clickedPg.html";
// });


const subLog = document.querySelector('.user');

subLog.addEventListener('click', () => {
    window.location.href = 'SubscribePg.html';
});


const pressed = document.getElementById('bar');
const opened = document.getElementById('open')

pressed.addEventListener('click',()=>{
   opened.style.backgroundColor = 'white';
});


