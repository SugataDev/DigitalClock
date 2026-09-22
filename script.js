let is12HourFormat = false;

const clock = document.getElementById("clock");
const ampm = document.getElementById("ampm");
const date = document.getElementById("date");
const toggleButton = document.getElementById("toggleBtn");

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampmStr = "";

  if (is12HourFormat) {
    ampmStr = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    ampm.classList.remove("hidden");
  } else {
    ampm.classList.add("hidden");
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clock.textContent = `${hours}:${minutes}:${seconds}`;
  ampm.textContent = ampmStr;

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  date.textContent = now.toLocaleDateString("en-US", dateOptions);
}

toggleButton.addEventListener("click", () => {
  is12HourFormat = !is12HourFormat;
  toggleButton.textContent = is12HourFormat
    ? "Switch to 24-Hour Format"
    : "Switch to 12-Hour Format";
  updateClock();
});

updateClock();
setInterval(updateClock, 1000);
