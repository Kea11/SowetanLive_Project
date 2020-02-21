//GETTING THE NASA API

const articleContent = document.querySelector('.letText');
const image = document.querySelector('#apiImage');
const image2 =document.querySelector('#apiImage2')
const subhead = document.querySelector('.Ksubhead');
const dates = document.querySelector('.KdateArt');
const author = document.querySelector('.KauthArt');
const date2 = document.querySelector('.KdateLet');
const author2 = document.querySelector('.KauthLet');
const subhead2 = document.querySelector('.Ksubhead2');

const base = 'https://api.nasa.gov/planetary/apod?api_key=cYmhU7tTzWrP6Lk1iZDCSEefGmdB9hclDAxapisK';
const base2 = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=cYmhU7tTzWrP6Lk1iZDCSEefGmdB9hclDAxapisK';


const getNasaAPI = async (base) => {
    const response = await fetch (base);
    const data = await response.json();
    return data;
}

getNasaAPI(base)
    .then(data => {  
    image.setAttribute('src', data.url); 
    subhead.innerHTML = `<h4 class="Ksubhead">${data.title}</h4>`;
    dates.innerHTML = `<h6 class="Kdate">${data.date}</h6>`;
    author.innerHTML = `<h6 class="Kauth">${data.copyright}</h6>`
    })
    .catch(err => {
        console.log(err)
    });


getNasaAPI(base2)
    .then(data => {
    image2.setAttribute('src', data.photos[1].img_src);
    subhead2.innerHTML = `<h4 class="Ksubhead2">${data.photos[1].camera.full_name}</h4>`;
    author2.innerHTML = `<h6 class="KauthLet">${data.photos[1].camera.name}</h6>`
    date2.innerHTML = `<h6 class="KdateLet">${data.photos[1].earth_date}</h6>`;
    }).catch(err => {
        console.log(err);
    });

