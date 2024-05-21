// Events :

const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const form = document.querySelector('#form');


form.addEventListener('submit' , function(Events)
{    
    Events.preventDefault();
    console.log(email.value);
    console.log(pass.value);
})
