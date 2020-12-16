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

  const email = e.target.elements[0].value;
  const password = e.target.elements[1].value;

  const credentials = { email, password };

  fetch("/api/v1/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 409) {
        displaySignupError(res.error);
      } else if (res.status === 500) {
        displaySignupError("Something went wrong");
      } else {
        window.location.href = "/";
      }
    })
    .catch((err) => {
      console.log(err);
      displaySignupError("Something went wrong");
    });
});
