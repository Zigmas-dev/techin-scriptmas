const DIGITS = {
  "0": [
    " ██████ ",
    "██    ██",
    "██   ███",
    "██  █ ██",
    "██ █  ██",
    "██    ██",
    " ██████ "
  ],
  "1": [
    "   ██   ",
    " ████   ",
    "   ██   ",
    "   ██   ",
    "   ██   ",
    "   ██   ",
    " ██████ "
  ],
  "2": [
    " ██████ ",
    "██    ██",
    "     ██ ",
    "   ███  ",
    "  ██    ",
    " ██     ",
    "████████"
  ],
  "3": [
    " ██████ ",
    "██    ██",
    "     ██ ",
    "  ████  ",
    "     ██ ",
    "██    ██",
    " ██████ "
  ],
  "4": [
    "██   ██ ",
    "██   ██ ",
    "██   ██ ",
    "████████",
    "     ██ ",
    "     ██ ",
    "     ██ "
  ],
  "5": [
    "████████",
    "██      ",
    "██      ",
    "██████  ",
    "     ██ ",
    "██   ██ ",
    " █████  "
  ],
  "6": [
    " ██████ ",
    "██      ",
    "██      ",
    "██████  ",
    "██   ██ ",
    "██   ██ ",
    " █████  "
  ],
  "7": [
    "████████",
    "     ██ ",
    "    ██  ",
    "   ██   ",
    "  ██    ",
    " ██     ",
    " ██     "
  ],
  "8": [
    " █████  ",
    "██   ██ ",
    "██   ██ ",
    " █████  ",
    "██   ██ ",
    "██   ██ ",
    " █████  "
  ],
  "9": [
    " █████  ",
    "██   ██ ",
    "██   ██ ",
    " ██████ ",
    "     ██ ",
    "     ██ ",
    " █████  "
  ]
};

const digitColors = {
  "0": "red",
  "1": "green",
  "2": "blue",
  "3": "gold",
  "4": "purple",
  "5": "red",
  "6": "green",
  "7": "blue",
  "8": "gold",
  "9": "purple"
};

const messages = [
  "Santa is preparing…",
  "Reindeer are buckling up…",
  "Sleigh warming up…",
  "Checking the Naughty List…",
  "Polishing Rudolph’s nose…",
  "Warming up hot chocolate…",
  "Wrapping presents…"
];

document.getElementById("start").addEventListener("click", () => {
  let n = 10;
  const asciiArea = document.getElementById("ascii");
  const msg = document.getElementById("message");

  const timer = setInterval(() => {
    asciiArea.style.animation = "none";
    void asciiArea.offsetWidth;
    asciiArea.style.animation = "fadeIn 0.8s ease";

    if (n < 0) {
      clearInterval(timer);
      asciiArea.innerHTML = "";
      msg.style.opacity = 1;
      msg.innerHTML = "🎅✨ SANTA’S SLEIGH IS LAUNCHING! ✨🎅";
      return;
    }

    // Function to generate colored digit HTML
    function getColoredDigit(digit) {
      const color = digitColors[digit] || "black";
      return DIGITS[digit].map(line => `<span class="${color}">${line}</span>`).join("<br>");
    }

    if (n === 10) {
      // Combine "1" and "0" with separate colors
      let lines = [];
      for (let i = 0; i < 7; i++) {
        const line = `<span class="${digitColors["1"]}">${DIGITS["1"][i]}</span>  <span class="${digitColors["0"]}">${DIGITS["0"][i]}</span>`;
        lines.push(line);
      }
      asciiArea.innerHTML = lines.join("<br>");
    } else {
      asciiArea.innerHTML = getColoredDigit(n.toString());
    }

    msg.style.opacity = 0;
    msg.style.animation = "none";
    void msg.offsetWidth;
    msg.style.animation = "fadePop 1s ease forwards";
    msg.textContent = messages[Math.floor(Math.random() * messages.length)];

    n--;
  }, 1000);
});
