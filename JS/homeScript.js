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

//logout button on the navbar
const dropDowns = document.querySelector('.arrowLogOut');
const show = document.querySelector('#myDropdown');

dropDowns.addEventListener('click',()=>{
    show.style.display = "block";
});

show .addEventListener('click', ()=>{
    window.location = "logIn.html";
});

//Get the button
const mybutton = document.getElementById("myBtn");
const button = document.querySelector('.RegClass');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// adding the firebase database. First collection

const newSection = document.querySelector('.newsSectionAdded');
const addNewsSection = (news) =>{

  let time = (news.created_at.toDate());

    let html =
    `
    <div class=" container newsSectionAdded">
    <h5 class="headingFornewsSection">${news.title}</h5>
    <p class="articleForNewNewsSection">${news.article}</p>
    <div class="toDateTime">${time}</div>
    <div class="empty"></div>
    </div>
    `;
    // console.log(html);
    newSection.innerHTML+=html;
}
db.collection('News').get().then((snapshot)=>{

    // do something when you get the data
    snapshot.docs.forEach(doc =>{
        // console.log(doc.data());
        addNewsSection(doc.data());
    });
    
}).catch(err=>{
    console.log(err);
});


// adding the second collection from firebase

const newSectionTwo = document.querySelector('.newsSectionAdded');
const addNewsSectionTwo = (pictures) =>{

  // let time = (images.created_at.toDate());

    let html =

    `
    <div class=" container imageAddition">
    <h5>${pictures.caption}</h5>
    <img width="300px" height="auto" src="${pictures.image}" alt="">
    <p><i>${pictures.Photographer}</i></p>
    <div class="imageDivider"></div>

    </div>
    `;
    // console.log(html);
    newSectionTwo.innerHTML+=html;
}
db.collection('Images').get().then((snapshot)=>{

    // do something when you get the data
    snapshot.docs.forEach(doc =>{
        // console.log(doc.data());
        addNewsSectionTwo(doc.data());
    });
    
}).catch(err=>{
    console.log(err);
});
