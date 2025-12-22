// Input text provided directly in the code (Lithuanian poem)
const inputLines = [
  "Ei drauguži žiemos vidury",
  "Roges jei turi",
  "tai gerai",
  "Į kalną aukščiausią",
  "kopti balčiausią",
  "jei gali",
  "tai gerai"
];

const output = document.getElementById("output");
const button = document.getElementById("runBtn");

button.addEventListener("click", () => {
  let rearrangedLines = [];

  // Split each line into words and build increasing-length lines
  inputLines.forEach(line => {
    const words = line.trim().split(/\s+/);
    let index = 0;
    let take = 1;

    while (index < words.length) {
      rearrangedLines.push(
        words.slice(index, index + take).join(" ")
      );
      index += take;
      take++;
    }
  });

  // Determine the trunk axis (maximum line length)
  const axis = Math.max(
    ...rearrangedLines.map(line => line.length)
  );

  let result = "";

  rearrangedLines.forEach((line, i) => {
    if (i % 2 === 0) {
      // Left-aligned line (ends at axis)
      result += " ".repeat(axis - line.length) + line + "\n";
    } else {
      // Right-aligned line (starts at axis)
      result += " ".repeat(axis) + line + "\n";
    }
  });

  output.textContent = result;
});
