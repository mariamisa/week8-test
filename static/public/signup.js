const SignupForm = document.getElementById("signupForm");

const displaySignupError = (msg) => {
  const SignupErrorWrapper = document.getElementById("signupError");
  const Message = document.createElement("p");

  Message.textContent = msg;

  SignupErrorWrapper.textContent = "";
  SignupErrorWrapper.appendChild(Message);
};

SignupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("signup");
});
