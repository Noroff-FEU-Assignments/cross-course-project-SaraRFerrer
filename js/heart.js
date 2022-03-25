const heart = document.querySelector(".heart");

let index = 0;

const colors = ["red" , "black"];

heart.addEventListener("click", function onClick() {
    heart.style.color = colors[index];

    index = index >= colors.lenght - 1 ? 0 : index + 1;

});


const cartCounter = document.querySelector(".counter");
const cartButton = document.querySelector(".cta-cart");
let cartArray =[]

function loadCartCounter() {
  let productCounter = localStorage.getItem("cartNumber");

  if (productCounter) {
    cartCounter.textContent = productCounter;
  }
}

loadCartCounter();

cartButton.addEventListener("click", addAmount);

function addAmount() {
  let productCounter = localStorage.getItem("cartNumber");

  productCounter = parseInt(productCounter);

  if (productCounter) {
    localStorage.setItem("cartNumber", productCounter + 1);
    cartCounter.textContent = productCounter + 1;
  } else {
    localStorage.setItem("cartNumber", 1);
    cartCounter.textContent = 1;
  }

}