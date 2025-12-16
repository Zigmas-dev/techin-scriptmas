// Add click event listener to the "Calculate" button
document.getElementById("calculate").addEventListener("click", () => {
  // Get values from input fields
  const n = Number(document.getElementById("rows").value);       // number of rows
  const k = Number(document.getElementById("firstRow").value);  // seats in first row

  // Validate input
  if (n <= 0 || k <= 0) {
    document.getElementById("result").textContent = "Please enter valid numbers";
    return;
  }

  // Initialize total seats
  let totalSeats = 0;

  // Loop through each row and calculate seats
  // Each row has 2 more seats than the previous row
  for (let i = 0; i < n; i++) {
    totalSeats += k + i * 2;
  }

  // Display the result
  document.getElementById("result").textContent = `Total seats needed: ${totalSeats}`;
});
