const body = document.querySelector("body");
const IMG_NUMBER = 11;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bg_Img");
  body.appendChild(image);
}
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function setInTime() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

function init() {
  setInTime()
  setInterval(setInTime, 10000)
}
init();
