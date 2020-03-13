const three = document.querySelector('.addTest');
const formTwo = document.querySelector('#formTwo');
const formThree = document.querySelector('#formThree');

const button = document.querySelector('button');

const addFact = (facts, id) => {
  let time = facts.created_at.toDate();
  let html =
   `<div class="dineo">
   <li class="createdDiv mx-4" data-id="${id}>
   <h5 class=" titleThree">${facts.title}</h5>    
   <p class=" textThree">${facts.Text}</p>    
   <caption class="mt-25 mx-4 captionThree">${time}</caption>
   <br>
   <button class="btn btn-outline-danger btn-sm my-2">Delete</button>
   </li>
   </div>
    
  `;

  three.innerHTML += html;
};



// get documents
db.collection('FactsSA').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
      const doc = change.doc;
      if (change.type === 'added'){
          addFact(doc.data(), doc.id);
      } else if (change.type === 'removed'){

          deleteFact(doc.id);
      }
  });
});

const deleteFact = (id) =>{

    const facts = document.querySelectorAll('.dineo');
    facts.forEach(fact => {
        if (fact.getAttribute('data-id') === id){
            fact.remove();
        }
    });
}

// save documents
formTwo.addEventListener('submit', e => {
  e.preventDefault();

  const now = new Date();
  const fact = {
    title: formTwo.userFacts.value,
    created_at: firebase.firestore.Timestamp.fromDate(now)
  };

  db.collection('FactsSA').add(fact).then(() => {
    console.log('facts added');
  }).catch(err => {
    console.log(err);
  });
});

// deleting data
three.addEventListener('click', e => {
  // console.log(e)
  if(e.target.tagName === 'BUTTON'){
    const id = e.target.parentElement.getAttribute('data-id');
    // console.log(id);
    db.collection('FactsSA').doc(id).delete().then(() => {
      console.log('fact deleted');
    });
  }
});

//saving the email address
formThree.addEventListener('submit', e => {
  e.preventDefault();

  const now = new Date();
  const sub = {
    title: formThree.exampleEmail.value,
    created_at: firebase.firestore.Timestamp.fromDate(now)
  };

  db.collection('Subscribe').add(sub).then(() => {
    console.log('email added');
  }).catch(err => {
    console.log(err);
  });
});