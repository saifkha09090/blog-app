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

signupForm.addEventListener("click", function () {
  let email = document.getElementById("signup-email");
  let password = document.getElementById("signup-password");
  let name = document.getElementById("name");

  if (localStorage.getItem(email.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This email is already exist!",
    });
  } else {
    localStorage.setItem(email.value, password.value);
    localStorage.setItem("name", name.value);
    setTimeout(() => {
      container.classList.remove("sign-up");
      container.classList.add("sign-in");
    }, 1000);
  }
  email.value = "";
  password.value = "";
  name.value = "";
});

loginForm.addEventListener("click", function () {
  let email = document.getElementById("login-email");
  let password = document.getElementById("login-password");

  if (
    localStorage.getItem(email.value) == password.value &&
    email.value != "" &&
    password.value != ""
  ) {
    location.href = 'blog.html'
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This email & password not exist!",
    });
  }
});
