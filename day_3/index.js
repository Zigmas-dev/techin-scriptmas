document.getElementById("trim").addEventListener("click", () => {
  const numInput = document.getElementById("number").value.trim();
  const resultEl = document.getElementById("result");

  // Check if input is a valid 4-digit number
  if (!/^\d{4}$/.test(numInput)) {
    resultEl.textContent = "Please enter a valid 4-digit number.";
    return;
  }

  // Remove the two middle digits
  const trimmedNumber = numInput[0] + numInput[3];

  // Display the trimmed number
  resultEl.textContent = `Trimmed number: ${trimmedNumber}`;
});
