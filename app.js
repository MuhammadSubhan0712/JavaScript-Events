// Events :

let email = document.querySelector(".email");
let pass = document.querySelector(".password");


email.addEventListener("click" , function(){
    console.log(email.value);
}
)

pass.addEventListener("submit" , function(){
    console.log(pass.value);
}
)