// // Events :

// const email = document.querySelector('#email')
// const pass = document.querySelector('#password')
// const form = document.querySelector('#form')


// form.addEventListener('submit' , function(Events)
// {    
//     Events.preventDefault();
//     console.log(email.value);
//     console.log(pass.value);
// })


// const reg = document.querySelector("#Register");
// const names = document.querySelector("#name");
// const fname = document.querySelector("#fname");
// const Mob = document.querySelector("#Mob");
// const Tel = document.querySelector("#Tel");
// const Add = document.querySelector("#Add");
// const Dob = document.querySelector("#Dob");
// const Gender = document.querySelector("#Gender");
// const Act = document.querySelector("#Activities");

// Gender = [];
// Act = [];

// reg.addEventListener('submit' , function(){
//     console.log("Name: ",names.value);
//     console.log("Father Name: ",fname.value);
//     console.log("Mobile No: ",Mob.value);
//     console.log("Telephone: ",Tel.value);
//     console.log("Address: ",Add.value);
//     console.log("Date-of-Birth: ",Dob.value);
//     for (let i = 0; i < Gender.length; i++) {
//     }
//     console.log("Gender: ",Gender[i].value);
//     for (let j = 0; j < Act.length; i++) {
//     }
//     console.log("Activities: ",Act[j].value);

// })


const image = document.querySelector("#image");

image.addEventListener('mouseover' , function(){
    image.src= 'https://img.freepik.com/premium-photo/imran-khan-birthday-jail-high-resolution-full-hd-image_951641-41.jpg';
 
})

image.addEventListener('mouseout' , function(){
    image.src = 'https://i.pinimg.com/736x/0f/81/20/0f8120b2e00c0ef28b19ce8c7c550292.jpg';
})