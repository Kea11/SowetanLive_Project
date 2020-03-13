// This is the navbar navigation

const pressed = document.querySelector('.navbar');
const opened = document.getElementById('bar');
const close = document.querySelector('.close');
const logo = document.querySelector('.log');


// pressed.addEventListener('click',()=>{
//    opened.style.backgroundColor = 'white';
//    opened.style.display = 'block';
//    close.style.display = 'block';
//    pressed.style.display = 'none';
//    logo.style.display = 'none';
// });

// close.addEventListener('click',()=> {
//     window.history.back();
// });

const back = document.querySelector('#return');

// back.addEventListener('click', () => {
//     window.location = 'OpinionPage.html';
// });


const nav = document.querySelector('.navbar');
const test = document.querySelector('.drop');

// test.style.display = 'none';

// nav.addEventListener('click', () => {
//     test.style.display = 'block';
// });



// const head = document.querySelector('.header');
// const page = document.querySelector('.opinionContent');
// const foot = document.querySelector('.footer');
// const signUp = document.querySelector('.signUp');
// const register = document.querySelector('#register');

// head.style.display = 'none';
// page.style.display = 'none';
// foot.style.display = 'none';

// register.addEventListener('click', () => {
//     head.style.display = 'block';
//     page.style.display = 'block';
//     foot.style.display = 'block';
//     signUp.style.display = 'none';
// });




// Log out

// const dropDowns = document.querySelector('.arrowLogOut');
// const show = document.querySelector('#myDropdown');

// dropDowns.addEventListener('click',()=>{
//     show.style.display = "block";
// });

// show.addEventListener('click', ()=>{
//     window.location = "logIn.html";
// });


//Get the button
// var mybutton = document.getElementById("myBtn");
// const button = document.querySelector('.RegClass');

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }


// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// button.addEventListener('click',()=>{
//   window.location.href = 'goodlifeWithLifestyleBlogs.html'
// });


// --------------------------------------------------------------

// Testing
// const btn = document.querySelector('button');
// const form = document.querySelector('.loginForm');
// const email = document.querySelector('.email');
// const password = document.querySelector('#LogPass');



// let savedEmail = localStorage.getItem('email');
// let savedPass = localStorage.getItem('LogPass');

// form.addEventListener('keyup', e => {
//   e.preventDefault();
//   localStorage.setItem('email', email);
//   localStorage.setItem('password', password);
// });



// // Show password
// function myFunction() {
//   var x = document.getElementById("LogPass");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// } 





// DATABASES

const commentSec = document.querySelector('.NewsComm');

const addComment = (news) => {

  let time = news.written_at.toDate();
  
  
  let html = 
  `
      <div class="comment1 mt-5 mx-3">
        <img src="${news.image}" style="width:100%; height:30%; margin-bottom:20px;"></img>
        <p>${news.comment}</p>
        <p class="text-secondary"><small>${time}</small></p>
      </div>
     <div class="progress" style="height:1px"></div>
  `;

  commentSec.innerHTML += html;

  // console.log(html);

}


db.collection('News').get().then((snapshot) => {
  //console.log(snapshot.docs[0].data());

  snapshot.docs.forEach(doc => {
    //console.log(doc.data());

    addComment(doc.data());
  });

}).catch(err => {
  console.log(err);
});



//Second Collection

const celebSec = document.querySelector('.CelebComm');

const addBlog = (celeb) => {

  let time = celeb.written_at.toDate();
  
  
  let html = 
  `
      <div class="mt-5 mx-3">
        <img src="${celeb.image}" style="width:100%; height:40%; margin-bottom:20px;"></img>
        <p>${celeb.comment}</p>
        <p class="text-secondary"><small>${time}</small></p>
      </div>
      <div class="progress mt-5 mx-3" style="height:1px"></div>
  `;

  celebSec.innerHTML += html;

  // console.log(html);

}


db.collection('Celebrities').get().then((snapshot) => {
  //console.log(snapshot.docs[1].data());
  snapshot.docs.forEach(doc => {
    addBlog(doc.data());

  });

}).catch(err => {
  console.log(err);
});



// 3rd Collection

const OtherSec = document.querySelector('.OtherComm');

const addOther = (other, id) => {
  
  
  let html = 
  `
      <div class="comment3 mt-5 mx-3" data-id="${id}">
      <h3>${other.title}</h3>
        <p>${other.comment}</p>
        <p class="text-secondary"><small>by: ${other.writer}</small></p>
        <button class="btn btn-outline-danger btn-sm">Delete</button>
      </div>
      <div class="progress mt-5 mx-3" style="height:1px"></div>
  `;

  OtherSec.innerHTML += html;

  // console.log(html);

}


// db.collection('Sports').get().then((snapshot) => {
  
//   snapshot.docs.forEach(doc => {
//     console.log(doc.id);
//     addOther(doc.data(), doc.id);

//   });

// }).catch(err => {
//   console.log(err);
// });



OtherSec.addEventListener('click', e => {
  if (e.target.tagName === "BUTTON"){
    const id = e.target.parentElement.getAttribute('data-id');

    db.collection('Sports').doc(id).delete().then(() => {
      console.log('comment deleted');
    });
  }
});



// Deleting a comment

const deleteSection = (id) => {
  const otherNews = document.querySelector('div');
  otherNews.forEach(other => {
    if (other.getAttribute('data-id') === id){
      other.remove();
    }
  });
}


db.collection('Sports').onSnapshot(snapshot => {
  
  snapshot.docChanges().forEach(change => {
    const doc = change.doc;
    if (change.type === 'added'){
      addOther(doc.data(), doc.id);
    } else if (change.type === 'removed'){
      deleteSection(doc.id);
    }
  });
});



// Adding a comment

const btn = document.querySelector('button');
const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  //const now = new Date();
  const comments = {
    title: form.article.value,
    comment: form.comment.value,
    writer: form.name.value
    //written_at: firebase.firestore.Timestamp.fromDate(now)
  };

  db.collection('Sports').add(comments).then(() => {
    form.innerHTML += comments;
    console.log('comment added');
  }).catch(err => {
    console.log(err);
  });
});



// Subscribe

const subscribe = document.querySelector('.subscribe');

subscribe.addEventListener('submit', e => {
  e.preventDefault();

  const subEmail = {
    email: subscribe.subsEmail.value
  };

  db.collection('Subscribers').add(subEmail).then(() => {
    console.log("Subscriber's email added");
  }).catch(err => {
    console.log(err);
  });
});


// const addEmail = (emailAdd) => {
//   console.log(emailAdd.email);
// }

// db.collection('Subscribers').get().then((snapshot) => {
//   //console.log(snapshot.docs[0].data());

// });
