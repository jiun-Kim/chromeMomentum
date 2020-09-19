const greetingForm = document.querySelector(".js-greetingForm"),
  greetingInput = greetingForm.querySelector("input"),
  greetingText = document.querySelector(".greetingText");

const NAME = "name";

function removeName() {
  localStorage.removeItem(NAME);
  location.reload();
}
function saveName(text) {
  localStorage.setItem(NAME, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = greetingInput.value;
  loadName(currentValue);
}
function loadName(text) {
  greetingText.innerText = `Hello ${text}`;
  const btn = document.createElement("button");
  greetingText.appendChild(btn);
  btn.classList.add("xbtn");
  btn.innerText = "✘";
  btn.addEventListener("click", removeName);
  saveName(text);
  greetingForm.classList.add("displayNone");
}

function askName() {
  greetingForm.addEventListener("submit", handleSubmit);
}
function ifElse() {
  const namevalue = localStorage.getItem(NAME);
  if (namevalue !== null) {
    loadName(namevalue);
  } else {
    askName();
  }
}
function init() {
  ifElse();
}
init();
