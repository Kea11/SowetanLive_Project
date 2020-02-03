const close = document.querySelector('.close');

close.style.display = 'none';

function myFunction() {
    var open = document.getElementById("myLinks");
    close.style.display = 'block';
    if (open.style.display === "block") {
      open.style.display = "none";
    } else {
      open.style.display = "block";
    }
  };

close.addEventListener('click',()=>{
window.location = "index.html"
});


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


