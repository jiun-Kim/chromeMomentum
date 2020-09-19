const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";
let toDos = [];

function delateSave(event) {
  event.preventDefault();
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDo();
}
function loadToDos(text) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  li.id = newId;
  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(btn);
  span.innerText = text;
  btn.innerText = "✅";
  btn.addEventListener("click", delateSave);
  const toDosObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDosObj);
  saveToDo();
}
function saveToDo() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}
function getName() {
  const getToDos = localStorage.getItem(TODO_LS);
  if (getToDos !== null) {
    const parsedToDos = JSON.parse(getToDos);
    parsedToDos.forEach(function (toDo) {
      loadToDos(toDo.text);
    });
  }
}
function emptyAlert(text) {
  if (text === "") {
    alert("please fill it up input the box!");
  } else {
    loadToDos(text);
  }
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  emptyAlert(currentValue);
  toDoInput.value = "";
}
function init() {
  toDoForm.addEventListener("submit", handleSubmit);
  getName();
}
init();
