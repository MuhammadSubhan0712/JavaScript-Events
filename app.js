// // Events :

const email = document.querySelector('#email')
const pass = document.querySelector('#password')
const form = document.querySelector('#form')


form.addEventListener('submit' , function(events)
{    events.preventDefault();
    console.log(email.value);
    console.log(pass.value);
})

const reg = document.querySelector("#Register");
const names = document.querySelector("#name");
const fname = document.querySelector("#fname");
const Mob = document.querySelector("#Mobile");
const Tel = document.querySelector("#Tel");
const Add = document.querySelector("#Address");
const Dob = document.querySelector("#Dob");

reg.addEventListener('submit' , function(events){
    events.preventDefault();
    console.log("Name:",names.value);
    console.log("Father Name:",fname.value);
    console.log("Mobile No:",Mob.value);
    console.log("Telephone:",Tel.value);
    console.log("Address:",Add.value);
    console.log("Date-of-Birth:",Dob.value);
})


