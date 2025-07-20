let signupForm = document.getElementById("signup-form");
let loginForm = document.getElementById("login-form");
let container = document.getElementById("container");

toggle = () => {
  container.classList.toggle("sign-in");
  container.classList.toggle("sign-up");
};
setTimeout(() => {
  container.classList.add("sign-in");
}, 200);

let userArr = []
signupForm.addEventListener("click", function () {
  let email = document.getElementById("signup-email");
  let password = document.getElementById("signup-password");
  let name = document.getElementById("name");

  let userObj = {
    email: email.value,
    password: password.value,
    name: name.value
  }

  userArr.push(userObj);

  let storedVal = JSON.parse(localStorage.getItem("users"));
  let store = storedVal && storedVal.find(user => user.email === email.value)
  if (store) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This email is already exist!",
    });
  } else {
    setTimeout(() => {
      container.classList.remove("sign-up");
      container.classList.add("sign-in");
    }, 1000);
    localStorage.setItem("users", JSON.stringify(userArr));
    storedVal += userArr;
  }
  email.value = "";
  password.value = "";
  name.value = "";
});

loginForm.addEventListener("click", function () {
  let email = document.getElementById("login-email");
  let password = document.getElementById("login-password");

  let storedVal = JSON.parse(localStorage.getItem("users"));
  if (
    storedVal.find(user => user.email === email.value && user.password === password.value)
  ) {
    location.href = 'blog.html'
    localStorage.setItem("email", email.value);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This email & password not exist!",
    });
  }
});
