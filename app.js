// Events :

const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const form = document.querySelector("#form");


form.addEventListener("submit" , function()
{
    console.log(email.value);
    console.log(pass.value);
})
