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


const pressed = document.querySelector('.navbar');
const opened = document.getElementById('bar');
const close = document.querySelector('.close');


pressed.addEventListener('click',()=>{
   opened.style.backgroundColor = 'white';
   opened.style.display = 'block';
   close.style.display = 'block';
   pressed.style.display = 'none';
});

close.addEventListener('click',()=> {
window.location = "index.html"
});

// const back = document.querySelector('.back1');

// back.addEventListener('click',()=>{
//     window.history.back();
// });
const dropDowns = document.querySelector('.arrowLogOut');
const show = document.querySelector('#myDropdown');

dropDowns.addEventListener('click',()=>{
    show.style.display = "block";
});

show .addEventListener('click', ()=>{
    window.location = "logIn.html";
}); 


