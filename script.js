// Get the time elements
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");

// Get all weekday elements
const days = document.querySelectorAll(".day");

function updateClock() {
  // Get the current date and time
  const now = new Date();

  // Get hours and minutes
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  // Display the time
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;

  // Get the current weekday (Sunday = 0)
  const currentDay = now.getDay();

  // Highlight the current weekday
  days.forEach(function(day) {
    const dayNumber = Number(day.dataset.day);

    if (dayNumber === currentDay) {
      day.classList.add("active");
    } else {
      day.classList.remove("active");
    }
  });
}

// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);
