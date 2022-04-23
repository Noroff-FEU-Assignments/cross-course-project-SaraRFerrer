const shop = document.querySelector(".w-container");

const url ="https://ssite.one/rainydays/wp-json/wc/store/products";

//const cors ="https://noroffcors.herokuapp.com/";

//const corsurl = "https://noroffcors.herokuapp.com/" + url;

function error(message="error"){
    return `<div class"error">${message}</div>`;
}

async function getApi () {
    try{
        const response = await fetch(url);
        const results = await response.json();
        const prod = results;

        console.log(results);
        

        for(let i = 0; i < results.length; i++){

            shop.innerHTML += `<a href="Product.html?id=${results[i].id}" class="product-card">
            <div><h2>${results[i].name}</h2></div>
            <div><img src ="${results[i].images[0].src}"></img></div>
            <div><p>${results[i].prices.price}</p></div>
            </a>`;
        }       
            

    } catch (error) {
        //shop.innerHTML = error("An Error occured, please try again");
    }
  
}

getApi();