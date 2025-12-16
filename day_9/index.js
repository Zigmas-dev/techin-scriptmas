// Add click event listener to the "Calculate" button
document.getElementById("calculate").addEventListener("click", () => {
  // Get the number of melons from input
  const n = Number(document.getElementById("melonCount").value);

  // Get the melon weights as a string and trim whitespace
  const weightsInput = document.getElementById("melonWeights").value.trim();

  // Reference to the result paragraph
  const result = document.getElementById("result");

  // Validate number of melons
  if (n <= 0) {
    result.textContent = "Please enter a valid number of melons";
    return;
  }

  // Split the weights string by spaces and convert to numbers
  const weights = weightsInput.split(/\s+/).map(Number);

  // Check if the correct number of weights is entered
  if (weights.length !== n) {
    result.textContent = `Please enter exactly ${n} weights separated by spaces`;
    return;
  }

  // Calculate the average weight
  const sum = weights.reduce((acc, w) => acc + w, 0);
  const avg = sum / n;

  // Find the melon whose weight is closest to the average
  let closestIndex = 0; // index of the closest melon
  let minDiff = Math.abs(weights[0] - avg); // initial difference

  for (let i = 1; i < n; i++) {
    const diff = Math.abs(weights[i] - avg);
    if (diff < minDiff) {
      minDiff = diff;
      closestIndex = i;
    }
  }

  // Display the melon number (1-based) and the average weight (2 decimal places)
  result.textContent = `${closestIndex + 1} ${avg.toFixed(2)}`;
});
