// Input data: list of elves and price list
const elves = [
  {
    firstName: "Jingle",
    lastName: "Sparkfoot",
    calls: [
      { city: "London", minutes: 12 },
      { city: "Paris", minutes: 7 }
    ]
  },
  {
    firstName: "Twinkle",
    lastName: "Icicletoes",
    calls: [
      { city: "NewYork", minutes: 20 },
      { city: "London", minutes: 5 }
    ]
  },
  {
    firstName: "Pudding",
    lastName: "Gumdrops",
    calls: [
      { city: "Paris", minutes: 15 }
    ]
  }
];

const priceList = {
  London: 0.50,
  Paris: 0.40,
  NewYork: 0.70
};

const button = document.getElementById("calculateBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  result.textContent = "";

  let totalCollected = 0;

  // Create a copy and sort elves by last name
  const sortedElves = [...elves].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );

  // Process each elf
  sortedElves.forEach(elf => {
    let elfTotal = 0;

    // Calculate cost of all calls for the elf
    elf.calls.forEach(call => {
      const pricePerMinute = priceList[call.city] || 0;
      elfTotal += call.minutes * pricePerMinute;
    });

    totalCollected += elfTotal;

    // Print elf billing line
    result.innerHTML += `
      ${elf.lastName} ${elf.firstName} ${elfTotal.toFixed(2)}<br>
    `;
  });

  // Print total collected money
  result.innerHTML += `<br><strong>Total: ${totalCollected.toFixed(2)}</strong>`;
});
