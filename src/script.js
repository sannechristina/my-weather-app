// current time

let now = new Date();
now.getMinutes();
now.getHours();

let hour = now.getHours();
let minute = now.getMinutes();
if (hour < 10) {
  hour = `0${hour}`;
}
if (minute < 10) {
  minute = `0${minute}`;
}

let h6 = document.querySelector("h6");
h6.innerHTML = `${hour} : ${minute}`;

// enter city

// convert

function showF(event) {
  event.preventDefault();
  let convert = document.querySelector(".temperature");
  let temperature = convert.innerHTML;
  convert.innerHTML = 66;
}
let selectf = document.querySelector("#f-link");
selectf.addEventListener("click", showF);

function showC(event) {
  event.preventDefault();
  let convertc = document.querySelector(".temperature");
  convertc.innerHTML = 19;
}
let selectc = document.querySelector("#input-c");
selectc.addEventListener("click", showC);

// live data

function handlePosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

navigator.geolocation.getCurrentPosition(handlePosition);

// city enter live

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let h2 = document.querySelector("#city-temp");
  let message = `It is ${temperature} degrees`;
  h2.innerHTML = message;
}

function go(event) {
  event.preventDefault();
  let input = document.querySelector("#input-go");
  let h1 = document.querySelector("h1");
  h1.innerHTML = input.value;
  let apiKey = "2982a53a67a2af7d8bfffdecb27b8eb2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#form-go");
form.addEventListener("submit", go);

//let city = "Paris";
//let apiKey = "2982a53a67a2af7d8bfffdecb27b8eb2";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//axios.get(apiUrl).then(showTemperature);
