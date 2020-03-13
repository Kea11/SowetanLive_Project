const different = document.querySelector('.Pic1');
const different1 = document.querySelector('.Pic2');
const different2 = document.querySelector('.Pic3');
const different3 = document.querySelector('.Pic3');
const JoinForm = document.querySelector('.formJoin')


const addImage = (Image) =>{ 

let Cap=  (Image.caption);
let taken = (Image.photographer)

    let html =
    `
    <img src="${Image.image}"  width="320px" height="190px" >
   <h4 style="text-align:center; color:#de2f20">${Cap}  <em style="font-size:10px;color:black">by:${taken}</em> </h4>
    `;

   different.innerHTML += html;

}

const addImage1 = (Image) =>{ 

    let Cap=  (Image.caption);
    let taken = (Image.photographer)
    
        let html =
        `
        <img src="${Image.image}"  width="320px" height="190px" >
       <h4 style="text-align:center; color:#de2f20">${Cap}  <em style="font-size:10px;color:black">by:${taken}</em> </h4>
        `;
    
       different1.innerHTML += html;
    
    }

    const addImage2 = (Image) =>{ 

        let Cap=  (Image.caption);
        let taken = (Image.photographer)
        
            let html =
            `
            <img src="${Image.image}"  width="320px" height="190px" >
           <h4 style="text-align:center; color:#de2f20">${Cap}  <em style="font-size:10px;color:black">by:${taken}</em> </h4>
            `;
        
           different2.innerHTML += html;
        
        }

        const addImage3 = (Image) =>{ 

            let Cap=  (Image.caption);
            let taken = (Image.photographer)
            
                let html =
                `
                <img src="${Image.image}"  width="320px" height="190px" >
               <h4 style="text-align:center; color:#de2f20">${Cap}  <em style="font-size:10px;color:black">by:${taken}</em> </h4>
                `;
            
               different3.innerHTML += html;
            
            }

           
    


db.collection('Images').get().then((snapshot) => {
       addImage(snapshot.docs[0].data());
       addImage1(snapshot.docs[1].data());
       addImage2(snapshot.docs[2].data());
       addImage3(snapshot.docs[3].data());
 
}).catch(err =>{
    console.log(err);
});


JoinForm.addEventListener('submit', e => {
  e.preventDefault();

  const now = new Date();
  const email = {
    email: JoinForm.userEmail.value,
    created_at: firebase.firestore.Timestamp.fromDate(now)
  };

  db.collection('Subscribe').add(email).then(() => {
    console.log('Email added');
  }).catch(err => {
    console.log(err);
  });
});