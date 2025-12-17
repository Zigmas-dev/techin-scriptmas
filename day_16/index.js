// Gift data: workshops and elves
const workshops = [
  [5, 7, 3],     // Workshop 1
  [6, 4, 4, 5],  // Workshop 2
  [10, 2]        // Workshop 3
];

const output = document.getElementById("output");
const btn = document.getElementById("countBtn");

btn.addEventListener("click", () => {
  output.innerHTML = "";

  let totalGifts = 0;

  // Loop through workshops
  for (let i = 0; i < workshops.length; i++) {
    let workshopSum = 0;

    // Loop through elves in the workshop
    for (let j = 0; j < workshops[i].length; j++) {
      workshopSum += workshops[i][j];
    }

    totalGifts += workshopSum;

    const p = document.createElement("p");
    p.textContent = `Workshop ${i + 1} made ${workshopSum} gifts`;
    output.appendChild(p);
  }

  const total = document.createElement("p");
  total.className = "total";
  total.textContent = `🎄 Santa’s total gift count is ${totalGifts}`;
  output.appendChild(total);
});
