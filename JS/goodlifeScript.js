const pressed = document.querySelector('#navbar');
const opened = document.getElementById('bar');
const close = document.querySelector('.close');
const logo = document.querySelector('.log');

const back = document.querySelector('.back1');
const mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const articleContent = document.querySelector('.UK');
const articleContent1 = document.querySelector('.US');
const articleContent2 = document.querySelector('.Can');
const articleContent3 = document.querySelector('.Sin');
const articleContent4 = document.querySelector('.Aus');


const base = "https://api.exchangeratesapi.io/latest";

const getRates = async () =>{
	const response = await fetch(base);
	const data = await response.json();
	return data;
};

getRates()
.then(data => {  
	Finance = data;
	articleContent.innerHTML = `<td class="UK" >${Finance.rates.GBP.toFixed(2)}</td> </p>`;
	articleContent1.innerHTML = `<td class="UK" >${Finance.rates.USD.toFixed(2)}</td> </p>`;
	articleContent2.innerHTML = `<td class="UK" >${Finance.rates.CAD.toFixed(2)}</td> </p>`;
	articleContent3.innerHTML = `<td class="UK" >${Finance.rates.SGD.toFixed(2)}</td> </p>`;
	articleContent4.innerHTML = `<td class="UK" >${Finance.rates.AUD.toFixed(2)}</td> </p>`;
})
.catch(err => console.log(err));


pressed.addEventListener('click', ()=>{
   opened.style.backgroundColor = 'white';
   opened.style.display = 'block';
   close.style.display = 'block';
   pressed.style.display = 'none';
   logo.style.display = 'none';
});

close.addEventListener('click', ()=> {
window.location = 'goodlifeWithLifestyleBlogs.html'
});



// back.addEventListener('click',()=>{
//     window.location= 'goodlifeWithLifestyleBlogs.html';
// });

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

const dropDowns = document.querySelector('.arrowLogOut');
const show = document.querySelector('#myDropdown');

dropDowns.addEventListener('click',()=>{
    show.style.display = "block";
});

show .addEventListener('click', ()=>{
    window.location = "logIn.html";
});







