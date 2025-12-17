// Juice amounts for each elf (in liters)
const juiceAmounts = [45, 92, 33];

const output = document.getElementById("output");
const btn = document.getElementById("calcBtn");

btn.addEventListener("click", () => {
  output.textContent = "";

  // Loop through each elf's juice amount
  for (let i = 0; i < juiceAmounts.length; i++) {
    let liters = juiceAmounts[i];

    // Calculate containers
    const fiveLiter = Math.floor(liters / 5);
    liters %= 5;

    const twoLiter = Math.floor(liters / 2);
    liters %= 2;

    const oneLiter = liters;

    // Print result
    output.textContent += `${fiveLiter} ${twoLiter} ${oneLiter}\n`;
  }
});
