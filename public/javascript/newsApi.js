const URL = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=a7912003a9a04585b9b4ccd2646523bb';
const searchURL = 'https://newsapi.org/v2/everything?q=';
const API_KEY = '&apiKey=a7912003a9a04585b9b4ccd2646523bb';
const factCat = 'https://catfact.ninja/fact';
let news = document.getElementById('news');
let search = document.getElementById('search');
let cat = document.getElementById('cat');
const progressBar = `<div class="progress"><div class="indeterminate"></div></div>`;

document.addEventListener("DOMContentLoaded", function(){
    catFact();
    getNews();
    search.addEventListener('keyup', function(event){
        if(search.value === "") {
            getNews()
        } else {
            searchNews(search.value)
        }
    })
});

function catFact() {
    fetch(factCat)
        .then(res => res.json())
        .then(data => cat.innerHTML = `<marquee hspace="10px" scrollamount="4">Fact about cat : ${data.fact}</marquee>`)
        .catch(err => console.log(err))
}

function getNews() {
    fetch(URL)
        .then(news.innerHTML = progressBar)
        .then(function (response) {
            return response.json()
        })
        .then(data => showNews(data))
        .catch(function (err) {
            console.log(err)
        })
}

function searchNews(newsName) {
    fetch(searchURL + newsName + API_KEY)
        .then(news.innerHTML = progressBar)
        .then(function(response) {
            return response.json();
        })
        .then(data => showNews(data))
        .catch(function(err){
            console.log(err)
        })
}

function showNews(data) {
    let newsData = '';
    if(data.articles == "") {
        news.innerHTML = "<h3>Artikel tidak ditemukan</h3>";
    } else {
        data.articles.forEach((item) => {
            newsData+=
            `<article>
                <img src="${item.urlToImage}" alt="Gambar tidak ditemukan">
                <h3>${item.title}</h3>
                <p class="author">${item.author} - ${item.publishedAt}</p>
                <p class="description">${item.description} <a href="${item.url}" target="_blank"><button>Read More..</button></a></p>
            </article>`
        });
        news.innerHTML = newsData;
    }
}