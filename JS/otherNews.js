const articleContent = document.querySelector('.articles');

// kept this hey for future reference
const key = '5ccf13c1c58142a6855856c06b9aa4d9';



const getNewsAPI = async () =>{
    const base =  'http://newsapi.org/v2/top-headlines?country=za&apiKey=5ccf13c1c58142a6855856c06b9aa4d9 ';
    // const query = `?apikey=${key}`;

    const response = await fetch (base);

    const data = await response.json();
    return data;    
}

getNewsAPI()
    .then(data =>{
        const newsData =data;
        const articles = newsData.articles;

        for (i=0; i < 6; i++){
            articleContent.innerHTML +=
            `
                <div class="firstSection"><h4 class="subheadingOne">${articles[i].title}</h4><img class="otherNewsImage" width="100%" src="${articles[i].urlToImage}" alt="Image from ${articles[i].source.name}">  <figcaption class="figure-caption">${articles[i].publishedAt}</figcaption><p class="para">${articles[i].description}</p><div class="firstDivider"></div></div><br>
            `;
        }

        // 

        console.log(data);
    })
    .catch(err => console.log(err));

//adding the third and final collection that the user can add and delete facts

// const addThree = (facts,id) =>{

//     let time = (facts.created_at.toDate());
//     let html =
//     `
//     <div class="createdDiv" data-id="${id}>
//     <h5 class="mt-25 mx-4 titleThree">${facts.Title}</h5>
//     <li class="mt-25 mx-4 textThree">${facts.Text}</li>
//     <caption class="mt-25 mx-4 captionThree">${time}</caption>
//     <br>
//     <button class ="btn btn-dark btn-sm mx-4 my-2">Delete</button>
//     </div>
//     `;
//     // console.log(html);
//     three.innerHTML+=html;
// };

// db.collection('FactsSA').get().then((snapshot) =>{
//     // do something when we have the data
//     snapshot.docs.forEach (doc =>{
//         // console.log(doc.id);
//         addThree(doc.data(), doc.id);
//     });
// }).catch(err =>{
//     console.log(err)
// })

// const addFacts = (facts, id) => {
//     let time = facts.created_at.toDate();
//     let html = 
//     `

//     `;
  
//     three.innerHTML += html;
//   };
  
//   const deleteFacts = (id) =>{
  
//       const facts = document.querySelectorAll('.createdDiv');
//       facts.forEach(fact => {
//           if (fact.getAttribute('data-id') === id){
//               fact.remove();
//           }
//       });
//   }
  

//   // save documents
// form.addEventListener('submit', e => {
//     e.preventDefault();
  
//     const now = new Date();
//     const facts = {
//       Title: form.userFacts.value,
//       created_at: firebase.firestore.Timestamp.fromDate(now)
//     };
  
//     db.collection('FactsSA').add(fact).then(() => {
//       console.log('facts added');
//     }).catch(err => {
//       console.log(err);
//     });
//   });


//   // get documents
//    db.collection('FactsSA').onSnapshot(snapshot => {
//       snapshot.docChanges().forEach(change => {
//           const doc = change.doc;
//           if (change.type === 'added'){
//               addFacts(doc.data(), doc.id);
//           } else if (change.type === 'removed'){
  
//               deleteFacts(doc.id);
//           }
//       });
//   });

  // deleting data
// form.addEventListener('click', e => {
//     // console.log(e)
//     if(e.target.tagName === 'BUTTON'){
//       const id = e.target.parentElement.getAttribute('data-id');
//       // console.log(id);
//       db.collection('FactsSa').doc(id).delete().then(() => {
//         console.log('facts deleted');
//       });
//     }
//   });
  

// //add documents
// form.addEventListener('submit', e =>{
//     e.preventDefault();

//     const now = new Date();
//     const factOne = {
//         title:form.recipe.value,
//         created_at:firebase.firestore.Timestamp.fromDate(now)

//     };
//     db.collection('FactsSA').add(factOne).then(() =>{
//         console.log('facts added');
//     }).catch(err =>{
//         console.log(err);
//     });
// });

// //deleting data

// three.addEventListener('click', e =>{
//     // console.log(e);
//     if(e.target.tagName === 'BUTTON'){
//         const id = e.target.parentElement.getAttribute('data-id');
//         // console.log(id);
//         db.collection('FactsSA').doc(id).delete().then(() =>{
//             console.log('facts deleted');
//         });

//     }
// });

// const deleteFact = (id) =>{
//     const SaFacts = document.querySelectorAll('.createdDiv');
//     SaFacts.forEach(fact =>{
//         if (fact.getAttribute('data-id') === id){
//             fact.remove();
//         }   
//      });
// }

// const three = document.querySelector('.collectionThree');
// const form = document.querySelector('#formTwo');

// const button = document.querySelector('button');

// const addFact = (facts, id) => {
//   let time = facts.created_at.toDate();
//   let html =
//    `
//    <div class="createdDiv" data-id="${id}>
//       <h5 class="mt-25 mx-4 titleThree">${facts.title}</h5>    
//       <li class="mt-25 mx-4 textThree">${facts.Text}</li>       <caption class="mt-25 mx-4 captionThree">${time}</caption>
//       <br>
//       <button class ="btn btn-dark btn-sm mx-4 my-2">Delete</button>
//   </div>
    
//   `;

//   three.innerHTML += html;
// };

// const deleteFact = (id) =>{

//     const facts = document.querySelectorAll('.createdDiv');
//     facts.forEach(fact => {
//         if (fact.getAttribute('data-id') === id){
//             fact.remove();
//         }
//     });
// }

// // get documents
// db.collection('FactsSA').onSnapshot(snapshot => {
//   snapshot.docChanges().forEach(change => {
//       const doc = change.doc;
//       if (change.type === 'added'){
//           addFact(doc.data(), doc.id);
//       } else if (change.type === 'removed'){

//           deleteFact(doc.id);
//       }
//   });
// });

// // save documents
// form.addEventListener('submit', e => {
//   e.preventDefault();

//   const now = new Date();
//   const fact = {
//     title: form.userFacts.value,
//     created_at: firebase.firestore.Timestamp.fromDate(now)
//   };

//   db.collection('FactsSA').add(fact).then(() => {
//     console.log('facts added');
//   }).catch(err => {
//     console.log(err);
//   });
// });

// // deleting data
// three.addEventListener('click', e => {
//   // console.log(e)
//   if(e.target.tagName === 'BUTTON'){
//     const id = e.target.parentElement.getAttribute('data-id');
//     // console.log(id);
//     db.collection('FactsSA').doc(id).delete().then(() => {
//       console.log('fact deleted');
//     });
//   }
// });
