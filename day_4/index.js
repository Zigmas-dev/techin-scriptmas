console.log("Gift Bag script loaded");

// Stores prices above 10 EUR
let magicalPrices = [];
console.log("Initial magicalPrices array:", magicalPrices);

document.getElementById("add").addEventListener("click", () => {
  const input = document.getElementById("price");
  const price = Number(input.value);

  console.log("======================================");
  console.log("Button clicked. Raw input value:", input.value);
  console.log("Converted price (Number):", price);

  // Basic validation
  if (isNaN(price)) {
    console.log("Error: Entered value is NOT a number!");
    alert("Please enter a valid number");
    return;
  }

  // If 0 entered → finish calculation
  if (price === 0) {
    console.log("0 detected — finishing and calculating results.");

    const total = magicalPrices.reduce((sum, val) => sum + val, 0);
    const count = magicalPrices.length;

    console.log("Final magicalPrices:", magicalPrices);
    console.log("Total magical price:", total);
    console.log("Number of magical toys:", count);

    document.getElementById("result").innerHTML = `
      <b>Total price of magical toys:</b> ${total.toFixed(2)} EUR<br>
      <b>Number of magical toys:</b> ${count}
    `;
    return;
  }

  // Store only prices > 10
  if (price > 10) {
    magicalPrices.push(price);
    console.log(`Added ${price} EUR to magicalPrices.`);
  } else {
    console.log(`Price ${price} EUR ignored (not above 10).`);
  }

  console.log("Current magicalPrices array:", magicalPrices);

  input.value = "";
  input.focus();
});
