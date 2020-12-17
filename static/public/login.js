const LoginForm = document.getElementById("loginForm");

const displayLoginError = (msg) => {
  const LoginErrorWrapper = document.getElementById("loginError");
  const Message = document.createElement("p");

  Message.textContent = msg;

  LoginErrorWrapper.textContent = "";
  LoginErrorWrapper.appendChild(Message);
};

LoginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("logged in");
});
