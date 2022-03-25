const heart = document.querySelector(".heart");

let index = 0;

const colors = ["red" , "black"];

heart.addEventListener("click", function onClick() {
    heart.style.color = colors[index];

    index = index >= colors.lenght - 1 ? 0 : index + 1;

});

