//GETTING THE NASA API

const articleContent = document.querySelector('.letText');
const image = document.querySelector('#apiImage');
const subhead = document.querySelector('.Ksubhead');

const base = 'https://api.nasa.gov/planetary/apod?api_key=cYmhU7tTzWrP6Lk1iZDCSEefGmdB9hclDAxapisK';

const getNasaAPI = async () => {

    const response = await fetch (base);

    const data = await response.json().then(data => {
        NasaData = data;
        console.log(NasaData);

        articleContent.innerHTML = `<div class="letText">${NasaData.explanation}</div>`
        
        image.setAttribute('src', NasaData.url); 
                
    });
}

getNasaAPI();