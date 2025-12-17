// Get input elements
const bookInput = document.getElementById("book");
const cdInput = document.getElementById("cd");
const usbInput = document.getElementById("usb");
const resultEl = document.getElementById("result");

// Button click event
document.getElementById("calcBtn").addEventListener("click", () => {
  const bookPrice = parseFloat(bookInput.value);
  const cdPrice = parseFloat(cdInput.value);
  const usbPrice = parseFloat(usbInput.value);

  // Reset classes
  resultEl.className = "";

  // Validate input
  if (
    isNaN(bookPrice) || bookPrice <= 0 ||
    isNaN(cdPrice) || cdPrice <= 0 ||
    isNaN(usbPrice) || usbPrice <= 0
  ) {
    resultEl.textContent = "Please enter valid prices.";
    resultEl.classList.add("error");
    return;
  }

  // Find the cheapest price
  const minPrice = Math.min(bookPrice, cdPrice, usbPrice);

  // Display result
  resultEl.textContent = `Peter will spend ${minPrice.toFixed(2)} €`;
  resultEl.classList.add("success");
});
