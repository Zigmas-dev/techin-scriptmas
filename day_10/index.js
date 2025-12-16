const hourHand = document.getElementById("hourHand");
const minuteHand = document.getElementById("minuteHand");
const result = document.getElementById("result");
const spinButton = document.getElementById("spinButton");

// Function to set clock hands
function setClock(h, m) {
  const hourAngle = (h % 12) * 30 + m * 0.5; // 30 deg per hour + minute fraction
  const minuteAngle = m * 6;                 // 6 deg per minute

  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
}

// Function to position numbers around the clock
function placeNumbers() {
  const clock = document.querySelector(".clock");
  const radius = 80; // distance from center
  const centerX = clock.clientWidth / 2;
  const centerY = clock.clientHeight / 2;

  for (let i = 1; i <= 12; i++) {
    const angle = (i * 30 - 90) * (Math.PI / 180); // 0 deg at top
    const x = centerX + radius * Math.cos(angle) - 10;
    const y = centerY + radius * Math.sin(angle) - 10;
    const numElem = document.getElementById(`num${i}`);
    numElem.style.left = `${x}px`;
    numElem.style.top = `${y}px`;
  }
}

// Spin minute hand event
spinButton.addEventListener("click", () => {
  let h = Number(document.getElementById("hoursInput").value);
  let m = Number(document.getElementById("minutesInput").value);

  if (h < 0 || h > 23 || m < 0 || m > 59) {
    result.textContent = "Enter valid hours (0-23) and minutes (0-59)";
    return;
  }

  // Spin minute hand full circle => add 60 minutes
  m += 60;
  h += Math.floor(m / 60); // add extra hour if minutes overflow
  m = m % 60;
  h = h % 24;               // keep 24-hour format

  // Update input fields
  document.getElementById("hoursInput").value = h;
  document.getElementById("minutesInput").value = m;

  // Update clock hands
  setClock(h, m);

  // Show new time
  result.textContent = `New time: ${h.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}`;
});

// Initialize clock to input values
setClock(
  Number(document.getElementById("hoursInput").value),
  Number(document.getElementById("minutesInput").value)
);

// Place numbers around the clock
placeNumbers();
