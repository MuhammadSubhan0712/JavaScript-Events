// // Events :

const form = document.querySelector('#Regform');
const user = document.querySelector('#Username');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const fname = document.querySelector('#fname');
const cnic = document.querySelector('#cnic');
const age = document.querySelector('#age');
const Mob = document.querySelector('#Mobile');
const Add = document.querySelector('#Address');
const Dob = document.querySelector('#Dob');


form.addEventListener('submit' , (event)=>
{   
    event.preventDefault();
     
var usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])[A-Za-z\d!@#$&*]{8,}$/;
var cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
var mobileRegex = /^03\d{9}$/;


if(!usernameRegex.test(user.value)){
    alert("Username must be between 4 and 15 characters long and contain only letters and numbers.");
}
if (!emailRegex.test(email.value)) {
    alert("Invalid email format.");

}
if (!passwordRegex.test(pass.value)) {
    alert("Password must be at least 8 characters long, contain at least one capital letter, and one special character.");

}
if (!cnicRegex.test(cnic.value)) {
    alert("CNIC must be in the format 42201-1234567-1.");

}
if (isNaN(age.value) || age.value < 18 || age.value > 60) {
    alert("Age must be a number between 18 and 60.");

}
if (!mobileRegex.test(Mob.value)) {
    alert("Mobile number must be in the format 03XXXXXXXXX.");

}
else{
alert("Form submitted successfully!");

    console.log("Username:",user.value);
    console.log("Email:",email.value);
    console.log("Password:",pass.value);
    console.log("Father Name:",fname.value);
    console.log("CNIC:",cnic.value);
    console.log("Age:",age.value);
    console.log("Mobile No:",Mob.value);
    console.log("Address:",Add.value);
    console.log("Date-of-Birth:",Dob.value);
}
})
