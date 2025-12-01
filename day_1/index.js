// Calculates the total cost of tiles
function calculateTileCost(length, width, m2price) {
  const area = length * width;         // room area
  const totalArea = area * 1.05;       // add 5% extra for wastage
  const totalCost = totalArea * m2price;
  return totalCost;
}

// Function triggered when the button is clicked
function calculate() {
  const length = Number(document.getElementById("length").value);
  const width = Number(document.getElementById("width").value);
  const price = Number(document.getElementById("price").value);

  const result = calculateTileCost(length, width, price);
  document.getElementById("result").textContent =
    "Total cost: " + result.toFixed(2) + " coins";
}
