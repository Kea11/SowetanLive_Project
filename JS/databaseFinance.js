const formForFinance = document.querySelector('.formForFinance');
const Financelist = document.querySelector('.FinanceList');

const addFComment = (Comments, id) => {
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
  
    Financelist.innerHTML += htmlComment;
  };

  db.collection('Comments').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if (change.type === 'added'){
           addFComment(doc.data(), doc.id);
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

formForFinance.addEventListener('submit', e =>{
    e.preventDefault();

    const now = new Date();
    const comment = {

   comment:formForFinance.userComment.value,
    created_at:firebase.firestore.Timestamp.fromDate(now),
    location:formForFinance.userLocation.value
    

    };
    db.collection('Comments').add(comment).then((snapshot)=>{
        console.log('comment added');
    }).catch(err =>{
        console.log(err);
    })
});

Financelist.addEventListener('click', e => {
    // console.log(e)
    if(e.target.tagName === 'BUTTON'){
      const id = e.target.parentElement.getAttribute('data-id');
      // console.log(id);
      db.collection('Comments').doc(id).delete().then(() => {
        console.log('Comment deleted');
      });
    }
  });  