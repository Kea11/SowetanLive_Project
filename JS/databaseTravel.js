const trav = document.querySelector('.para2');
const formForTravel = document.querySelector('.formForTravel ');
const TravelList = document.querySelector('.TravelList');

const travel = (Blogs) =>{

let name = (Blogs.author);

let time = (Blogs.created_at.toDate());

let html =
`
<br>
<p>${Blogs.article}</p>
<br>
<h4 style="font-size:15px">By: ${name}</h4>   
<p style="font-size:10px">${time}</p>
`;

// console.log(html);
trav.innerHTML += html;
}

const addTComment = (Comments, id) => {
    let time = Comments.created_at.toDate();

    let location =(Comments.location)

    let htmlComment = `
      <li data-id="${id}" style="margin: 20px;">
        <div>${Comments.comment}</div>
        <br>
        <div style="font-size:15px">${location}</div>
        <div style="font-size:10px">${time}</div>
        <button class="btn btn-danger btn-sm my-2">delete</button>
      </li>
    `;
  
    TravelList.innerHTML += htmlComment;
  };

db.collection('Blogs').get().then((snapshot) => {
    travel(snapshot.docs[2].data());
    
 
}).catch(err =>{
console.log(err);
});

db.collection('Comments').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if (change.type === 'added'){
           addTComment(doc.data(), doc.id);
        }
         else if (change.type === 'removed'){

            deleteComment(doc.id);
        }
    });
});

const deleteComment = (id) =>{

    const comments = document.querySelectorAll('li');
    comments.forEach(comment => {
        if (comment.getAttribute('data-id') === id){
            comment.remove();
        }
    });
}

formForTravel.addEventListener('submit', e =>{
    e.preventDefault();

    const now = new Date();
    const comment = {

   comment:formForTravel.userComment.value,
    created_at:firebase.firestore.Timestamp.fromDate(now),
    location:formForTravel.userLocation.value
    

    };
    db.collection('Comments').add(comment).then((snapshot)=>{
        console.log('comment added');
    }).catch(err =>{
        console.log(err);
    })
});

TravelList.addEventListener('click', e => {
    // console.log(e)
    if(e.target.tagName === 'BUTTON'){
      const id = e.target.parentElement.getAttribute('data-id');
      // console.log(id);
      db.collection('Comments').doc(id).delete().then(() => {
        console.log('Comment deleted');
      });
    }
  });  