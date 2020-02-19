// const pressed = document.querySelector('.navbar');
// const pressPg = document.querySelector('#navbar')
// const opened = document.getElementById('bar');
// const close = document.querySelector('.close');
// const logo = document.querySelector('.log')


// pressed.addEventListener('click',()=>{
//    opened.style.backgroundColor = 'white';
//    opened.style.display = 'block';
//    close.style.display = 'block';
//    pressed.style.display = 'none';
//    logo.style.display = 'none';
// });

// // pressPg.addEventListener('click',()=>{
// //     opened.style.backgroundColor = 'white';
// //     opened.style.display = 'block';
// //     close.style.display = 'block';
// //     pressed.style.display = 'none';
// //     logo.style.display = 'none';
// //  });

// close.addEventListener('click', ()=> {
// window.location = 'goodlifeWithLifestyleBlogs.html'
// });

// const back = document.querySelector('.back1');

// back.addEventListener('click',()=>{
//     window.history.back();
// });

// const subLog = document.querySelector('.user');

// subLog.addEventListener('click', () => {
//     window.location.href = 'SubscribePg.html';
// });


const articleContent = document.querySelector('#Quote1');

const key = "7944fcc06cmshcdd98a8104b33c1p17390bjsn1fef96bbd219"

const base = "https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10"

const get = async () =>{
	const response = await fetch(base + key);
	const data = await response.json();
	return data;
};

get()
.then(data => console.log(data))
.catch(err => console.log(err));