const quote = document.getElementById('quote');
const author = document.getElementById('author');

const api_url = 'https://api.quotable.io/random';

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.textContent = data.content;
    author.textContent = data.author;
}
getQuote(api_url);