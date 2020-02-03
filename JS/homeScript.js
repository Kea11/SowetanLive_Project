

// code for the pop up 
 const bod = document.querySelectorAll('body');
 const wrapper = document.querySelector('.popUpWrapper');
// console.log('wrapper');
const closePopUp = document.querySelector('.closePop');

const popUpWrapper = document.querySelector('.popUpWrapper');

const AcceptButton = document.querySelector('.accept');


window.addEventListener('pageshow', () => {
     wrapper.style.display = 'block';
});

closePopUp.addEventListener('click', () =>{
    wrapper.style.display = 'none';
    // window.location = "index.html";
});

popUpWrapper.addEventListener('pageshow', e =>{
    if(e.target.className === 'popUpWrapper'){
        popUpWrapper.style.display = 'none';
    }
});

AcceptButton.addEventListener('click', () =>{
  wrapper.style.display = 'none';
});
