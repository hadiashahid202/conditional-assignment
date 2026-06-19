const form = document.getElementById("form");
const msg = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (
    name === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    msg.textContent = "please fill out all fields";
    return;
  }
  if (password !== confirmPassword) {
    msg.textContent = "passwords do not match";
    return;
  }
  msg.textContent = `Account created for ${name}.`;
});
