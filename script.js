const numberHours = document.querySelector(".number-hours");
const barseconds = document.querySelector(".bar-seconds");

const numberElement = [];
const barElement = [];

// create number-hour
for (let i = 1; i <= 12; i++) {
  numberElement.push(`<span style="--index:${i};"><p>${i}</p></span>`);
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

// create bar-seconds
for (let i = 1; i <= 60; i++) {
  barElement.push(`<span style="--index:${i};"><p></p></span>`);
}

barseconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector(".hand.hours");
const handMinutes = document.querySelector(".hand.minutes");
const handSeconds = document.querySelector(".hand.seconds");

function getCurrentTime() {
  let date = new Date();  // Corrected from 'new Data()' to 'new Date()'
  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();
  let currentSeconds = date.getSeconds();

  // Rotate seconds hand
  handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
  // Rotate minutes hand
  handMinutes.style.transform = `rotate(${currentMinutes * 6 }deg)`;
  // Rotate hours hand
  handHours.style.transform = `rotate(${(currentHours % 12) * 30 + currentMinutes / 2}deg)`;
}

setInterval(getCurrentTime, 1000);  // Update every second

getCurrentTime();
