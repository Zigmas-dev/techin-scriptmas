document.getElementById("generate").addEventListener("click", () => {
  const n = Number(document.getElementById("gridSize").value);
  const result = document.getElementById("result");

  if (n <= 0) {
    result.innerHTML = "Please enter a valid number";
    return;
  }

  let html = "";

  // Top border
  html += "<span class='border'>" + "#".repeat(n * 2 + 3) + "</span>\n";

  // Grid rows
  for (let row = 1; row <= n; row++) {
    html += "<span class='border'>#</span> ";

    for (let col = 1; col <= n; col++) {
      let cellClass = "dot";
      let symbol = ".";
      const sum = row + col;

      if (sum % 15 === 0) {
        cellClass = "G";
        symbol = "G";
      } else if (sum % 3 === 0) {
        cellClass = "T";
        symbol = "T";
      } else if (sum % 5 === 0) {
        cellClass = "S";
        symbol = "S";
      }

      html += `<span class='${cellClass}'>${symbol}</span> `;
    }

    html += "<span class='border'>#</span>\n";
  }

  // Bottom border
  html += "<span class='border'>" + "#".repeat(n * 2 + 3) + "</span>";

  result.innerHTML = html;
});
