// Event listener for the "Generate" button
document.getElementById("generate").addEventListener("click", () => {
  const n = Number(document.getElementById("gridSize").value);

  // Validate input
  if (n <= 0) {
    document.getElementById("result").textContent = "Please enter a valid number";
    return;
  }

  let pattern = "";

  // Top border
  pattern += "#".repeat(n * 2 + 3) + "\n";

  // Grid rows
  for (let row = 1; row <= n; row++) {
    pattern += "# "; // left border

    for (let col = 1; col <= n; col++) {
      if ((row + col) % 15 === 0) {
        pattern += "G ";
      } else if ((row + col) % 3 === 0) {
        pattern += "T ";
      } else if ((row + col) % 5 === 0) {
        pattern += "S ";
      } else {
        pattern += ". ";
      }
    }

    pattern += "#\n"; // right border
  }

  // Bottom border
  pattern += "#".repeat(n * 2 + 3);

  // Display the pattern
  document.getElementById("result").textContent = pattern;
});
