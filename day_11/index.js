const calculateBtn = document.getElementById("calculate");
const result = document.getElementById("result");
const arrowCircle = document.getElementById("arrow");

// Rings definition (inner to outer)
const rings = [
  {radius: 20, points: 100},  // black center
  {radius: 60, points: 80},   // blue ring
  {radius: 90, points: 60},   // green ring
  {radius: 120, points: 40}   // red ring
];

calculateBtn.addEventListener("click", () => {
  const xc = Number(document.getElementById("centerX").value);
  const yc = Number(document.getElementById("centerY").value);
  const x = Number(document.getElementById("arrowX").value);
  const y = Number(document.getElementById("arrowY").value);

  // Move the arrow visually
  arrowCircle.setAttribute("cx", x);
  arrowCircle.setAttribute("cy", y);

  // Calculate distance from center
  const dx = x - xc;
  const dy = y - yc;
  const dist = Math.sqrt(dx*dx + dy*dy);

  let score = 0;
  const epsilon = 0.001; // tolerance for being on the boundary

  if (dist <= rings[0].radius) {
    score = (Math.abs(dist - rings[0].radius) < epsilon) ? rings[0].points / 2 : rings[0].points;
  } else if (dist <= rings[1].radius) {
    score = (Math.abs(dist - rings[1].radius) < epsilon) ? rings[1].points / 2 : rings[1].points;
  } else if (dist <= rings[2].radius) {
    score = (Math.abs(dist - rings[2].radius) < epsilon) ? rings[2].points / 2 : rings[2].points;
  } else if (dist <= rings[3].radius) {
    score = (Math.abs(dist - rings[3].radius) < epsilon) ? rings[3].points / 2 : rings[3].points;
  } else {
    score = 0; // outside red ring
  }

  result.textContent = `Points: ${score}`;
});
