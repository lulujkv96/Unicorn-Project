let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function formatDate(timestamp) {
  let date = new Date(timestamp * 1000);
  let currentDay = days[date.getDay()];

  return `${currentDay}`;
}

function formatAmPm(timestamp) {
  let time = new Date(timestamp);
  let meridium = time.getHours();
  if (meridium < 12 || meridium === 0) {
    meridium = "AM";
  } else {
    meridium = "PM";
  }
  return `<small> ${meridium}</small>`;
}
function formatHour(timestamp) {
  let time = new Date(timestamp);
  let hour = time.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = time.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return ` ${hour}:${minute}`;
}

function formatMonthDate(timestamp) {
  let date = new Date(timestamp);
  let month = date.getMonth();
  if (month < 10) {
    month = `${month}`;
  }
  let dates = date.getDate();
  if (dates < 10) {
    date = `0${date}`;
  }
  return `${month + 1}/${dates}`;
}

function newUnit(temperature) {
  let cToFah = Math.round((temperature * 9) / 5 + 32);
  return `${cToFah}`;
}
function newUnitF(temperature) {
  let cToFah = Math.round(temperature * (9 / 5) + 32);
  let fToCel = Math.round((cToFah - 32) * (5 / 9));
  return `${fToCel}`;
}

function changeIcon(icon) {
  let newIcon = document.querySelector("#icon");

  if (icon === "Snow") {
    newIcon.innerHTML = `<i class="far fa-snowflake i1"></i>`;
  }
  if (
    icon === "Mist" ||
    "Smoke" ||
    "Haze" ||
    "Dust" ||
    "Fog" ||
    "Sand" ||
    "Ash" ||
    "Squall" ||
    "Tornado"
  ) {
    newIcon.innerHTML = `<i class="fas fa-smog i1"></i>`;
  }
  let time = new Date();
  let hour = time.getHours();
  if (icon === "Clear" || (icon === `Clear sky` && hour < 18)) {
    newIcon.innerHTML = `<i class="far fa-sun i1"></i>`;
  }
  if (icon === "Clear" || (icon === `Clear sky` && hour > 18)) {
    newIcon.innerHTML = `<i class="fas fa-moon i1"></i>`;
  }

  if (icon === "Clouds") {
    newIcon.innerHTML = `<i class="fas fa-cloud i1"></i>`;
  }

  if (icon === "Drizzle") {
    newIcon.innerHTML = `<i class="fas fa-cloud-rain i1"></i>`;
  }
  if (icon === "Thunderstorm") {
    newIcon.innerHTML = `<i class="fas fa-bolt i1"></i>`;
  }
  return `${newIcon.innerHTML}`;
}

function showWeather(response) {
  document.querySelector("#icon").innerHTML.inn = changeIcon(
    response.data.weather[0].main
  );
  document.querySelector("#month").innerHTML = formatMonthDate(
    response.data.dt
  );
  document.querySelector("#h3-date0").innerHTML = formatDate(response.data.dt);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#hour-zero").innerHTML =
    formatHour(response.data.dt * 1000) + formatAmPm(response.data.dt * 1000);
  document.querySelector("#wind").innerHTML = ` ${Math.round(
    response.data.wind.speed
  )}`;

  document.querySelector("#celsius-value").innerHTML = `${Math.round(
    response.data.main.temp
  )}`;
  document.querySelector("#min").innerHTML = `${Math.round(
    response.data.main.temp_min
  )}`;
  document.querySelector("#max").innerHTML = `${Math.round(
    response.data.main.temp_max
  )}`;

  let temp = Math.round(response.data.main.temp);
  let min = Math.round(response.data.main.temp_min);
  let max = Math.round(response.data.main.temp_max);
  document.querySelector("#celsius-value").innerHTML = `${temp}`;
  document.querySelector("#min").innerHTML = `${min}`;
  document.querySelector("#max").innerHTML = `${max}`;
  function cToF() {
    document.querySelector("#celsius-value").innerHTML = `${newUnit(temp)}`;
    document.querySelector("#max").innerHTML = `${newUnit(max)}`;
    document.querySelector("#min").innerHTML = `${newUnit(min)}`;
  }
  let f = document.querySelector("#far");
  f.addEventListener("click", cToF);
  function fToC() {
    document.querySelector("#celsius-value").innerHTML = `${temp}`;
    document.querySelector("#max").innerHTML = `${max}`;
    document.querySelector("#min").innerHTML = `${min}`;
  }
  let c = document.querySelector("#celsius");
  c.addEventListener("click", fToC);
  let description = response.data.weather[0].description;
  document.querySelector("#cond").innerHTML = `${description}`;
}

function getRealData(city) {
  let apiKey = "9c4544f45195250e2bcd644c91a57aeb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}

function formatCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;

  getRealData(city);
}

let button = document.querySelector("#button1");
button.addEventListener("click", formatCity);

function contactMe(event) {
  event.preventDefault();
  alert(`Slide into my e-mails at:  🌟 lucreziajkv@icloud.com 🌟`);
}

let mail = document.querySelector(".mail");
mail.addEventListener("click", contactMe);
