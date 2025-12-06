document.getElementById("calculate").addEventListener("click", () => {

  // Read input values: starting hour (a), starting minute (b), and flight duration (c)
  const a = parseInt(document.getElementById("hour").value);
  const b = parseInt(document.getElementById("minute").value);
  const c = parseInt(document.getElementById("duration").value);

  // Validate input: check if any field is empty or not a number
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("result").textContent = "Please fill in all fields.";
    return;
  }

  // Convert starting time to total minutes from midnight
  const startMinutes = a * 60 + b;

  // Add the flight duration (c minutes)
  const landingTotal = startMinutes + c;

  // Calculate landing hour (v)
  // Use modulo (24 * 60) to wrap around after midnight
  const v = Math.floor((landingTotal % (24 * 60)) / 60);

  // Calculate landing minute (m)
  const m = landingTotal % 60;

  // Output the result to the page
  document.getElementById("result").textContent = `Santa lands at: ${v} hours and ${m} minutes.`;
});
