const pressed = document.querySelector('.navbar');
const pressPg = document.querySelector('#navbar')
const opened = document.getElementById('bar');
const close = document.querySelector('.close');
const logo = document.querySelector('.log')


pressed.addEventListener('click',()=>{
   opened.style.backgroundColor = 'white';
   opened.style.display = 'block';
   close.style.display = 'block';
   pressed.style.display = 'none';
   logo.style.display = 'none';
});

// pressPg.addEventListener('click',()=>{
//     opened.style.backgroundColor = 'white';
//     opened.style.display = 'block';
//     close.style.display = 'block';
//     pressed.style.display = 'none';
//     logo.style.display = 'none';
//  });

close.addEventListener('click', ()=> {
window.location = 'goodlifeWithLifestyleBlogs.html'
});

const back = document.querySelector('.back1');

back.addEventListener('click',()=>{
    window.location= 'goodlifeWithLifestyleBlogs.html';
});

const subLog = document.querySelector('.user');

subLog.addEventListener('click', () => {
    window.location.href = 'SubscribePg.html';
});


const articleContent = document.querySelector('.UK');
const articleContent1 = document.querySelector('.US');
const articleContent2 = document.querySelector('.Can');
const articleContent3 = document.querySelector('.Sin');
const articleContent4 = document.querySelector('.Aus');


const base = "https://api.exchangeratesapi.io/latest"

const getRates = async () =>{
	const response = await fetch(base);
	const data = await response.json();
	return data;
};
getRates()
.then(data => {
	Finance = data;
	articleContent.innerHTML = `<td class="UK" >${Finance.rates.GBP}</td> </p>`
})
.then(data => {
	articleContent1.innerHTML = `<td class="UK" >${Finance.rates.USD}</td> </p>`
})
.then(data => {
	articleContent2.innerHTML = `<td class="UK" >${Finance.rates.CAD}</td> </p>`
})
.then(data => {
	articleContent3.innerHTML = `<td class="UK" >${Finance.rates.SGD}</td> </p>`
})
.then(data => {
	articleContent4.innerHTML = `<td class="UK" >${Finance.rates.AUD}</td> </p>`
})
.catch(err => console.log(err));