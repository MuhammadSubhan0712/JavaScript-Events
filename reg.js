
const reg = document.querySelector("#Register");
const names = document.querySelector("#name");
const fname = document.querySelector("#fname");
const Mob = document.querySelector("#Mob");
const Tel = document.querySelector("#Tel");
const Add = document.querySelector("#Add");
const Dob = document.querySelector("#Dob");
const Gender = document.querySelector("#Gender");
const Act = document.querySelector("#Activities");

Gender = [];
Act = [];

reg.addEventListener('submit' , function(){
    console.log("Name: ",names.value);
    console.log("Father Name: ",fname.value);
    console.log("Mobile No: ",Mob.value);
    console.log("Telephone: ",Tel.value);
    console.log("Address: ",Add.value);
    console.log("Date-of-Birth: ",Dob.value);
    for (let i = 0; i < Gender.length; i++) {
    }
    console.log("Gender: ",Gender[i].value);
    for (let j = 0; j < Act.length; i++) {
    }
    console.log("Activities: ",Act[j].value);

})