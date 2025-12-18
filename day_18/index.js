// Data: each inner array represents one store
// Each number is the price of an item bought in that store
const stores = [
  [1.07, 2.92, 3.45, 1.09, 0.89],
  [1.08, 2.35, 3.75, 1.12, 0.69],
  [0.98, 2.48, 3.62, 1.10, 0.72]
];

const resultEl = document.getElementById("result");
const button = document.getElementById("calculateBtn");

button.addEventListener("click", () => {
  let output = "";
  let totalSpentAllStores = 0;

  // Loop through each store
  for (let i = 0; i < stores.length; i++) {
    const storeItems = stores[i];
    let storeTotal = 0;

    // Loop through items in the store
    for (let price of storeItems) {
      storeTotal += price;
    }

    // Add to grand total
    totalSpentAllStores += storeTotal;

    // Store number starts from 1
    const storeNumber = i + 1;
    const itemCount = storeItems.length;

    // Append formatted result
    output += `${storeNumber} ${itemCount} ${storeTotal.toFixed(2)}\n`;
  }

  // Append total spent in all stores
  output += totalSpentAllStores.toFixed(2);

  resultEl.textContent = output;
});
