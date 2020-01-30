const SecPage = document.querySelector('#Page2');
const go = document.querySelector('.BssubWed');
const origin = document.querySelector('.Page1');
const back = document.querySelector('.back1');

go.addEventListener('click',()=>{
    origin.style.display = 'none';
 SecPage.style.display = 'block';
});

back.addEventListener('click',()=>{
window.location = 'goodlife.html';
});

