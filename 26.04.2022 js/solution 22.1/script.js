const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
const userName = document.getElementById("user_name");
const age = document.getElementById("age");
const email = document.getElementById("email");
const btnSubmit = document.getElementById("sub_btn");
btnSubmit.addEventListener("click", (event) => {
  const details =
    userName.name +
    ": " +
    userName.value +
    "\n" +
    age.name +
    ": " +
    age.value +
    "\n " +
    email.name +
    ": " +
    email.value +
    "\n";
  const chosen = confirm(details);
  if (chosen) {
    alert("congratulations you successfully sent this form");
    userName.value = "";
    age.value = "";
    email.value = "";
  }
});
