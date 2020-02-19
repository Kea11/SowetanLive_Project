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

const response =   fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=10&cat=movies", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
		"x-rapidapi-key": "46383b5a00msh68a33f191428782p1e7a6cjsnbc4612262466",
		"content-type": "application/x-www-form-urlencoded"
	},
	"body": {}
})
.then(data => {
	console.log(data);
})
.catch(err => {
	console.log(err);
});