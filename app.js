// // Events :
function Validation() {
  const form = document.querySelector("#form");
  const user = document.querySelector("#Username");
  const email = document.querySelector("#email");
  const pass = document.querySelector("#password");
  const names = document.querySelector("#name");
  const fname = document.querySelector("#fname");
  const cnic = document.querySelector("#cnic");
  const age = document.querySelector("#age");
  const Mob = document.querySelector("#Mobile");
  const Add = document.querySelector("#Address");
  const Dob = document.querySelector("#Dob");

  var usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])[A-Za-z\d!@#$&*]{8,}$/;
  var cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
  var mobileRegex = /^03\d{9}$/;

  if (!usernameRegex.test(user)) {
    alert(
      "Username must be between 4 and 15 characters long and contain only letters and numbers."
    );
    return false;
  }
  if (!emailRegex.test(email)) {
    alert("Invalid email format.");
    return false;
  }
  if (!passwordRegex.test(pass)) {
    alert(
      "Password must be at least 8 characters long, contain at least one capital letter, and one special character."
    );
    return false;
  }
  if (!cnicRegex.test(cnic)) {
    alert("CNIC must be in the format 42201-1234567-1.");
    return false;
  }
  if (isNaN(age) || age < 18 || age > 60) {
    alert("Age must be a number between 18 and 60.");
    return false;
  }
  if (!mobileRegex.test(mobile)) {
    alert("Mobile number must be in the format 03XXXXXXXXX.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}

form.addEventListener("submit", (events) => {
  events.preventDefault();
  console.log("Username:", user.value);
  console.log("Email:", email.value);
  console.log("Password:", pass.value);
  console.log("Name:", names.value);
  console.log("Father Name:", fname.value);
  console.log("CNIC:", cnic.value);
  console.log("Age:", age.value);
  console.log("Mobile No:", Mob.value);
  console.log("Address:", Add.value);
  console.log("Date-of-Birth:", Dob.value);
});
