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

let tomorrow = new Date(now);
function formatDate1() {
  tomorrow.setDate(tomorrow.getDate() + 1);
  let currentDay = days[tomorrow.getDay()];
  return `${currentDay}`;
}

document.querySelector("#h3-date1").innerHTML = formatDate1(tomorrow);

let day2 = new Date(now);
function formatDate2() {
  day2.setDate(day2.getDate() + 2);
  let currentDay = days[day2.getDay()];
  return `${currentDay}`;
}

document.querySelector("#h3-date2").innerHTML = formatDate2(day2);

let day3 = new Date(now);
function formatDate3() {
  day3.setDate(day3.getDate() + 3);
  let currentDay = days[day3.getDay()];
  return `${currentDay}`;
}

document.querySelector("#h3-date3").innerHTML = formatDate3(day3);

let day4 = new Date(now);
function formatDate4() {
  day4.setDate(day4.getDate() + 4);
  let currentDay = days[day4.getDay()];
  return `${currentDay}`;
}

document.querySelector("#h3-date4").innerHTML = formatDate4(day4);

let day5 = new Date(now);
function formatDate5() {
  day5.setDate(day5.getDate() + 5);
  let currentDay = days[day5.getDay()];
  return `${currentDay}`;
}

document.querySelector("#h3-date5").innerHTML = formatDate5(day5);

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
document.querySelector("h3 div.date-number").innerHTML = formatMonthDate(
  now,
  now
);

function formatMonthDate1(months, dates) {
  let month = months.getMonth();
  if (month < 10) {
    month = `${month}`;
  }
  let date = dates.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  return `${month + 1}/${date + 1}`;
}
document.querySelector("h3 div.date-number1").innerHTML = formatMonthDate1(
  now,
  now
);

function formatMonthDate2(months, dates) {
  let month = months.getMonth();
  if (month < 10) {
    month = `${month}`;
  }
  let date = dates.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  return `${month + 1}/${date + 2}`;
}
document.querySelector("h3 div.date-number2").innerHTML = formatMonthDate2(
  now,
  now
);

function formatMonthDate3(months, dates) {
  let month = months.getMonth();
  if (month < 10) {
    month = `${month}`;
  }
  let date = dates.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  return `${month + 1}/${date + 3}`;
}
document.querySelector("h3 div.date-number3").innerHTML = formatMonthDate3(
  now,
  now
);

function formatMonthDate4(months, dates) {
  let month = months.getMonth();
  if (month < 10) {
    month = `${month}`;
  }
  let date = dates.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  return `${month + 1}/${date + 4}`;
}
document.querySelector("h3 div.date-number4").innerHTML = formatMonthDate4(
  now,
  now
);

function formatMonthDate5(months, dates) {
  let month = months.getMonth();
  if (month < 10) {
    month = `${month}`;
  }
  let date = dates.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  return `${month + 1}/${date + 5}`;
}
document.querySelector("h3 div.date-number5").innerHTML = formatMonthDate5(
  now,
  now
);

function cToF1() {
  let celsius = Number(document.getElementById("#celsius-value1"));

  let cToFah = (celsius * 9) / 5 + 32;
  document.querySelector("#celsius-value1").innerHTML = cToFah;
}
let f1 = document.querySelector("#far1");
f1.addEventListener("click", cToF1);
function fToC1() {
  let celsius = Number(document.getElementById("#celsius-value1"));

  let cToFah = celsius * (9 / 5) + 32;
  let fToCel = (cToFah - 32) * (5 / 9);
  document.querySelector("#celsius-value1").innerHTML = fToCel;
}

let c1 = document.querySelector("#celsius1");
c1.addEventListener("click", fToC1);
function cToF2() {
  let celsius = Number(document.getElementById("#celsius-value2"));

  let cToFah = (celsius * 9) / 5 + 32;
  document.querySelector("#celsius-value2").innerHTML = cToFah;
}
let f2 = document.querySelector("#far2");
f2.addEventListener("click", cToF2);
function fToC2() {
  let celsius = Number(document.getElementById("#celsius-value2"));

  let cToFah = celsius * (9 / 5) + 32;
  let fToCel = (cToFah - 32) * (5 / 9);
  document.querySelector("#celsius-value2").innerHTML = fToCel;
}

let c2 = document.querySelector("#celsius2");
c2.addEventListener("click", fToC2);
function cToF3() {
  let celsius = Number(document.getElementById("#celsius-value3"));

  let cToFah = (celsius * 9) / 5 + 32;
  document.querySelector("#celsius-value3").innerHTML = cToFah;
}
let f3 = document.querySelector("#far3");
f3.addEventListener("click", cToF3);
function fToC3() {
  let celsius = Number(document.getElementById("#celsius-value3"));

  let cToFah = celsius * (9 / 5) + 32;
  let fToCel = (cToFah - 32) * (5 / 9);
  document.querySelector("#celsius-value3").innerHTML = fToCel;
}

let c3 = document.querySelector("#celsius3");
c3.addEventListener("click", fToC3);

function cToF4() {
  let celsius = Number(document.getElementById("#celsius-value4"));

  let cToFah = (celsius * 9) / 5 + 32;
  document.querySelector("#celsius-value4").innerHTML = cToFah;
}
let f4 = document.querySelector("#far4");
f4.addEventListener("click", cToF4);
function fToC4() {
  let celsius = Number(document.getElementById("#celsius-value4"));

  let cToFah = celsius * (9 / 5) + 32;
  let fToCel = (cToFah - 32) * (5 / 9);
  document.querySelector("#celsius-value4").innerHTML = fToCel;
}

let c4 = document.querySelector("#celsius4");
c4.addEventListener("click", fToC4);

function cToF5() {
  let celsius = Number(document.getElementById("#celsius-value5"));

  let cToFah = (celsius * 9) / 5 + 32;
  document.querySelector("#celsius-value5").innerHTML = cToFah;
}
let f5 = document.querySelector("#far5");
f5.addEventListener("click", cToF5);
function fToC5() {
  let celsius = Number(document.getElementById("#celsius-value5"));

  let cToFah = celsius * (9 / 5) + 32;
  let fToCel = (cToFah - 32) * (5 / 9);
  document.querySelector("#celsius-value5").innerHTML = fToCel;
}

let c5 = document.querySelector("#celsius5");
c5.addEventListener("click", fToC5);
function newUnit(temperature) {
  let cToFah = Math.round((temperature * 9) / 5 + 32);
  return `${cToFah}`;
}
function newUnitF(temperature) {
  let cToFah = Math.round(temperature * (9 / 5) + 32);
  let fToCel = Math.round((cToFah - 32) * (5 / 9));
  return `${fToCel}`;
}
function changeIcon(apIcon) {
  let icon = apIcon;
  let newIcon = document.querySelector("#icon");
  if (`${icon}` === "13d") {
    newIcon = `<i class="far fa-snowflake"></i>`;
  }
  if (`${icon}` === "50d") {
    newIcon = `<i class="fas fa-smog"></i>`;
  }
  if (`${icon}` === "01d") {
    newIcon = `<i class="fas fa-sun"></i>`;
  }
  if (`${icon}` === "01n") {
    newIcon = `<i class="fas fa-moon"></i>`;
  }
  if (`${icon}` === "02d" || "02n" || "03d" || "03n" || "04d" || "04n") {
    newIcon = `<i class="fas fa-cloud"></i>`;
  }
  if (`${icon}` === "10d") {
    newIcon = `<i class="fas fa-cloud-sun-rain"></i>`;
  }
  if (`${icon}` === "09d") {
    newIcon = `<i class="fas fa-cloud-rain"></i>`;
  }
  if (`${icon}` === "11d") {
    newIcon = `<i class="fas fa-bolt"></i>`;
  }
  return `${newIcon}`;
}
function showWeather(response) {
  document.querySelector("#icon").innerHTML = changeIcon(
    response.data.weather[0].icon
  );

  document.querySelector("#h3-date0").innerHTML = formatDate(response.data.dt);
  document.querySelector("#city").innerHTML =
    document.querySelector("#city1").innerHTML =
    document.querySelector("#city2").innerHTML =
    document.querySelector("#city3").innerHTML =
    document.querySelector("#city4").innerHTML =
    document.querySelector("#city5").innerHTML =
      response.data.name;
  document.querySelector("#hour-zero").innerHTML =
    document.querySelector("#hour-one").innerHTML =
    document.querySelector("#hour-two").innerHTML =
    document.querySelector("#hour-three").innerHTML =
    document.querySelector("#hour-four").innerHTML =
    document.querySelector("#hour-five").innerHTML =
      formatHour(response.data.dt * 1000) + formatAmPm(response.data.dt * 1000);
  document.querySelector("#wind").innerHTML = ` ${Math.round(
    response.data.wind.speed
  )} `;
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
    document.querySelector("#celsius-value").innerHTML = `${newUnitF(temp)}`;
    document.querySelector("#max").innerHTML = `${newUnitF(max)}`;
    document.querySelector("#min").innerHTML = `${newUnitF(min)}`;
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

function formatCity() {
  let city = document.querySelector("#city-search").value;

  getRealData(city);
}
function contactMe(event) {
  event.preventDefault();
  alert(`Slide into my e-mails at:  🌟 lucreziajkv@icloud.com 🌟`);
}
let button = document.querySelector("#button1");
button.addEventListener("click", formatCity);
let mail = document.querySelector(".mail");
mail.addEventListener("click", contactMe);
