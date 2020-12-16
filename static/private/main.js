const Todos = document.getElementById("todos");

const displaySignupError = (msg) => {
  const SignupErrorWrapper = document.getElementById("signupError");
  const Message = document.createElement("p");

  Message.textContent = msg;

  SignupErrorWrapper.textContent = "";
  SignupErrorWrapper.appendChild(Message);
};

fetch("/todos")
  .then((res) => res.json())
  .then((res) => {
    if (res.status === 500) {
      const ErrorMessage = document.createElement("p");

      ErrorMessage.textContent =
        "Something went wrong, can't display your todos";

      Todos.appendChild(ErrorMessage);
    } else {
    }
  }).cat;
