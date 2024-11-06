const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const counter = document.getElementById("counter");

let n = 0;
let intervalId = null;

function counting() {
  counter.textContent = n;
  n++;
}

function startCounting() {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(counting, 1000);
}

function stopCounting() {
  clearInterval(intervalId);
}

stopBtn.addEventListener("click", stopCounting);
startBtn.addEventListener("click", startCounting);

startCounting();
