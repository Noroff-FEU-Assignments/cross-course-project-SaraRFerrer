const from = document.querySelector("#form");
const email = document.querySelector("#email");
const emailErr = document.querySelector("#emailErr");

function validateForm(event) {
    event.preventDefault();

    if (validateEmail(email.value) === true) {
        emailErr.style.display = "none";
    } else {
        emailErr.style.display = "block";
    }

    console.log("Form");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
     
}