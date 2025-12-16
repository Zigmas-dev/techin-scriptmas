const button = document.getElementById("groupBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const input = document.getElementById("wordsInput").value;

  const words = input
    .split(",")
    .map(word => word.trim())
    .filter(word => word.length > 0);

  const map = {};

  for (const word of words) {
    // sort letters to create a key
    const key = word.split("").sort().join("");

    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  }

  // Convert to array
  let groups = Object.values(map);

  // BONUS: sort words inside groups
  groups.forEach(group => group.sort());

  // BONUS: sort groups by size (descending)
  groups.sort((a, b) => b.length - a.length);

  result.textContent = JSON.stringify(groups, null, 2);
});
