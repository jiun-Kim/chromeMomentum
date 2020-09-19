const LOCNAME = "locationName";
const APIKEY = "47214b8b636b66b44522808a4fdb2713";
const weather = document.querySelector(".weather-box");
const weatherN = weather.querySelector(".weather-Nomal");
const weatherC = weather.querySelector(".weather-comp");
const weatherT = weather.querySelector(".weather-temp");

function loadAPI(lat, lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric

    `
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const location = json.name;
      const weatherDes = json.weather[0].description;
      const temperature = json.main.temp;

      weatherN.innerText = `${weatherDes}`;
      weatherC.innerText = `${location}`;
      weatherT.innerText = `${temperature}`;
    });
}
function askCurrentLoaction() {
  navigator.geolocation.getCurrentPosition(
    getSuccessPosition,
    getErrorPosition
  );
}
function getSuccessPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const positionObj = {
    latitude,
    longitude,
  };
  saveLocation(positionObj);
}
function saveLocation(positionObj) {
  localStorage.setItem(LOCNAME, JSON.stringify(positionObj));
}
function getErrorPosition() {
  alert("We cannot find your Loaction!");
}
function ifElse() {
  const getSaveLoc = localStorage.getItem(LOCNAME);
  if (getSaveLoc !== null) {
    const parseName = JSON.parse(getSaveLoc);
    loadAPI(parseName.latitude, parseName.longitude);
  } else {
    askCurrentLoaction();
  }
}
function init() {
  ifElse();
}
init();
