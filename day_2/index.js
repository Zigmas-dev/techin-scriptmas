console.log("JS file loaded"); // Check if the JS file is loaded

document.getElementById("calc").addEventListener("click", () => {
  console.log("Button clicked"); // Confirm the button click event works

  // Get values from the input fields and convert them to numbers
  const x = Number(document.getElementById("hours").value);
  const y = Number(document.getElementById("minutes").value);

  console.log("Hours input:", x);   // Log hours input
  console.log("Minutes input:", y); // Log minutes input

  // Validate the inputs: check if they are numbers
  if (isNaN(x) || isNaN(y)) {
    console.log("Error: inputs are not numbers");
    document.getElementById("result").textContent = "Please enter valid numbers!";
    return; // Exit the function if invalid
  }

  // Calculate minutes since midnight
  const m = x * 60 + y;

  // Calculate seconds since midnight
  const s = m * 60;

  console.log("Computed minutes:", m); // Log computed minutes
  console.log("Computed seconds:", s); // Log computed seconds

  // Display results in the HTML
  document.getElementById("result").innerHTML = `
    Minutes since midnight: <b>${m}</b><br>
    Seconds since midnight: <b>${s}</b>
  `;
});
