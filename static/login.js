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

  const email = e.target.elements[0].value;
  const password = e.target.elements[1].value;

  const credentials = { email, password };

  fetch("/api/v1/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.status === 400) {
        displayLoginError("Please double check your password and email");
      } else if (res.status === 500) {
        displayLoginError("Something went wrong");
      } else {
        window.location.href = "/";
      }
    })
    .catch((err) => {
      console.log(err);
      displayLoginError("Something went wrong");
    });
});
