const pressed = document.querySelector('.navbar');
const opened = document.getElementById('bar');
const close = document.querySelector('.close');


pressed.addEventListener('click',()=>{
   opened.style.backgroundColor = 'white';
   opened.style.display = 'block';
   close.style.display = 'block';
   pressed.style.display = 'none';
});

close.addEventListener('click', ()=> {
window.history.back();
});

// const back = document.querySelector('.back1');

// back.addEventListener('click',()=>{
//     window.history.back();
// });

// const subLog = document.querySelector('.user');

// subLog.addEventListener('click', () => {
//     window.location.href = 'SubscribePg.html';
// });

