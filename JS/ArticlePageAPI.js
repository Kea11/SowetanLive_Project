//GETTING THE NASA API

const articleContent = document.querySelector('.ArtText');
const image = document.querySelector('#apiImage2');

const base = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=cYmhU7tTzWrP6Lk1iZDCSEefGmdB9hclDAxapisK';

const getNasaAPI = async () => {

    const response = await fetch (base);

    const data = await response.json().then(data => {
        NasaData = data;
        console.log(NasaData);
        
        image.setAttribute('src', data.photos[1].img_src);
    });
}

getNasaAPI();