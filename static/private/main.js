const LogoutButton = document.getElementById("logoutBtn");
const TodoForm = document.getElementById("addTodo");
const TodoContainer = document.getElementById("todos");
const AddTodoError = document.getElementById("addTodoError");
const TodoList = document.createElement("ul");

const Todo = (id, msg) => {
  const TodoItem = document.createElement("li");

  TodoItem.id = id;
  TodoItem.textContent = msg;

  return TodoItem;
};

fetch("/api/v1/todos")
  .then((res) => res.json())
  .then(({ status, data }) => {
    if (status === 500) {
      TodoContainer.textContent =
        "Something went wrong, can't fetch your todos";
    } else {
      if (data.length > 0) {
        data.forEach(({ id, description }) => {
          TodoList.appendChild(Todo(id, description));
        });

        TodoContainer.textContent = "";
        TodoContainer.appendChild(TodoList);
      } else {
        TodoContainer.textContent = "Nothing to do :)";
      }
    }
  });

TodoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = e.target.elements[0].value;

  fetch("/api/v1/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ description }),
  })
    .then((res) => res.json())
    .then(({ status, data }) => {
      if (status === 500) {
        AddTodoError.textContent = "Something went wrong, can't add your todo";
      } else {
        AddTodoError.textContent = "";
        const { id, description } = data[0];
        TodoList.appendChild(Todo(id, description));
      }
    });
});

LogoutButton.addEventListener("click", (e) => {
  fetch("/api/v1/logout")
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 200) {
        window.location.href = "/";
      }
    });
});
