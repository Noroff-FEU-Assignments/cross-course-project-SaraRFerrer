const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);
console.log(params);

const cors = "https://noroffcors.herokuapp.com/";
const url = "https://ssite.one/rainydays/wp-json/wc/store/products/" + id;

const corsUrl = cors + url;

console.log(corsUrl);

const productContainer = document.querySelector(".product-container");

function error(message="error"){
    return `<div class"error">${message}</div>`;
}

console.log(corsUrl);

async function fetchApi() {
    try{
        const response = await fetch(corsUrl);
        const results = await response.json();
        const product = results[0];

        console.log(results);
        

        productContainer.innerHTML += `<div class=".details"><h2>${results.name}</h2>
        <img src ="${results.images[0].src}"/>
        <p>Description: ${results.description}</p>
        <p> Price: ${results.prices.price}</p></div>`;

    } catch (error) { 

    }
}

fetchApi();