const year = document.querySelector("#year");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
const preloader = document.querySelector("#preloader");

const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Устанавливаем год на страницу
year.innerText = currentYear + 1;

function updateCounter() {
  const currentTime = new Date();
  const diff = nextYear - currentTime; // осталось до НГ в миллисекундах
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24); // осталось дней
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24; // + к дням, осталось часов
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60; // + к часам, осталось минут
  const secondsLeft = Math.floor(diff / 1000) % 60; // + к минутам, осталось секунд

  days.innerText = daysLeft;
  hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}

updateCounter();

// Запускаем расчет каждую секунду
setInterval(updateCounter, 1000);

setTimeout(() => {
  preloader.remove();
  countdown.style.display = "flex";
}, 3000);
