const pressed = document.getElementById('bar');
const opened = document.getElementById('open');

pressed.addEventListener('click',()=>{
   opened.style.backgroundColor = 'white';
});

const back = document.querySelector('.back1');

back.addEventListener('click',()=>{
    window.history.back();
});

const subLog = document.querySelector('.user');

subLog.addEventListener('click', () => {
    window.location.href = 'SubscribePg.html';
});