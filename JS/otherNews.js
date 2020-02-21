const articleContent = document.querySelector('.articles');

//kept this hey for future reference
// const key = '5ccf13c1c58142a6855856c06b9aa4d9';



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

