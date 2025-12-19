const countInput = document.getElementById("countInput");
const toysInput = document.getElementById("toysInput");
const button = document.getElementById("checkBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  result.className = "";
  result.textContent = "";

  const n = Number(countInput.value);

  // Read toy numbers from input
  const toys = toysInput.value
    .trim()
    .split(/\s+/)
    .map(Number);

  // Basic validation
  if (n <= 0 || toys.length !== n) {
    result.textContent = "Invalid input data.";
    result.classList.add("error");
    return;
  }

  const counts = {};

  // Count occurrences of each toy number
  for (const toy of toys) {
    counts[toy] = (counts[toy] || 0) + 1;
  }

  // Find toys that appear more than once
  const duplicates = [];

  for (const toy in counts) {
    if (counts[toy] > 1) {
      duplicates.push(Number(toy));
    }
  }

  // Sort duplicates in ascending order
  duplicates.sort((a, b) => a - b);

  if (duplicates.length === 0) {
    result.textContent = "No toys available for trade.";
    result.classList.add("success");
  } else {
    result.textContent = duplicates.join(" ");
    result.classList.add("success");
  }
});
