const clockBox = document.querySelector(".clock-box"),
  dateTime = clockBox.querySelector(".Time"),
  dayDate = clockBox.querySelector(".dayDate"),
  ampm = clockBox.querySelector(".ampm");

function timer() {
  const date = new Date();
  const day = date.getDay();
  const stringDay = date.toLocaleString("defult", { weekday: "short" });
  const hours = date.getHours();
  const hours12 = hours % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  dayDate.innerText = stringDay;
  dateTime.innerText = `${hours12 < 10 ? `0${hours12}` : hours12}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  ampm.innerText = `${hours <= 12 ? "AM" : "PM"}`;
}
function init() {
  timer();
  setInterval(timer, 1000);
}

init();
