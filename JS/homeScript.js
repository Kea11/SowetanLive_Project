// code for the pop up 
const wrapper = document.querySelector('.popUpWrapper');

const closePopUp = document.querySelector('.closePop');

const popUpWrapper = document.querySelector('.popUpWrapper');

const AcceptButton = document.querySelector('.accept');

window.addEventListener('pageshow', () => {
     wrapper.style.display = 'block';
});

closePopUp.addEventListener('click', () =>{
    wrapper.style.display = 'none';
});

popUpWrapper.addEventListener('pageshow', e =>{
    if(e.target.className === 'popUpWrapper'){
        popUpWrapper.style.display = 'none';
    }
});

AcceptButton.addEventListener('click', () =>{
  wrapper.style.display = 'none';
});


const pressed = document.getElementById('bar');
const opened = document.getElementById('open')

pressed.addEventListener('click',()=>{
   opened.style.backgroundColor = 'white';
});