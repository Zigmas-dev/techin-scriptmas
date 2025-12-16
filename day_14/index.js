const PROMOS = {
  PROMO10: 0.10,
  PROMO25: 0.25,
  SANTA50: 0.50
};

const cart = {
  items: {},
  discount: 0,
  appliedPromoCode: null,

  add(id, price) {
    if (!id || price <= 0) return;
    if (this.items[id]) return;
    this.items[id] = price;
  },

  remove(id) {
    delete this.items[id];
  },

  applyDiscount(code) {
    if (this.appliedPromoCode) return false;
    if (PROMOS[code]) {
      this.discount = PROMOS[code];
      this.appliedPromoCode = code;
      return true;
    }
    return false;
  },

  total() {
    const sum = Object.values(this.items).reduce((acc, p) => acc + p, 0);
    return sum * (1 - this.discount);
  },

  clear() {
    this.items = {};
    this.discount = 0;
    this.appliedPromoCode = null;
  },

  list() {
    return this.items;
  }
};

const giftId = document.getElementById("giftId");
const giftPrice = document.getElementById("giftPrice");
const promoCode = document.getElementById("promoCode");
const promoMsg = document.getElementById("promoMsg");
const cartList = document.getElementById("cartList");

document.getElementById("addBtn").addEventListener("click", () => {
  cart.add(giftId.value.trim(), Number(giftPrice.value));
  render();
});

document.getElementById("promoBtn").addEventListener("click", () => {
  const code = promoCode.value.trim();
  if (cart.applyDiscount(code)) {
    promoMsg.textContent = `Promo code applied!`;
    promoMsg.style.color = "green";
  } else {
    promoMsg.textContent = cart.appliedPromoCode 
      ? "A promo code has already been used!" 
      : "Invalid promo code!";
    promoMsg.style.color = "red";
  }
  render();
});

function render() {
  const items = cart.list();
  cartList.innerHTML = "";

  if (Object.keys(items).length === 0) {
    const emptyBtn = document.createElement("button");
    emptyBtn.textContent = "View Cart";
    emptyBtn.className = "empty-cart-btn";
    emptyBtn.addEventListener("click", () => {
      cartList.textContent = "Gift list is empty.";
    });
    cartList.appendChild(emptyBtn);
  } else {
    for (const id in items) {
      const line = document.createElement("div");
      line.className = "gift-line";

      const namePrice = document.createElement("span");
      namePrice.textContent = `${id}: ${items[id]} 🍬`;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "❌";
      removeBtn.className = "remove-btn";
      removeBtn.addEventListener("click", () => {
        cart.remove(id);
        render();
      });

      line.appendChild(namePrice);
      line.appendChild(removeBtn);
      cartList.appendChild(line);
    }

    // Summary
    const summary = document.createElement("div");
    summary.className = "summary-column";

    const originalPrice = Object.values(items).reduce((acc, p) => acc + p, 0);
    const discountPercent = cart.appliedPromoCode ? PROMOS[cart.appliedPromoCode]*100 : 0;
    const totalPrice = cart.total();

    const priceDiv = document.createElement("div");
    priceDiv.textContent = `Price: ${originalPrice.toFixed(2)} 🍬`;
    const discountDiv = document.createElement("div");
    discountDiv.textContent = `Discount: ${discountPercent}%`;
    const totalDiv = document.createElement("div");
    totalDiv.textContent = `Total: ${totalPrice.toFixed(2)} 🍬`;

    summary.appendChild(priceDiv);
    summary.appendChild(discountDiv);
    summary.appendChild(totalDiv);

    // Clear cart button
    const clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear Cart";
    clearBtn.className = "empty-cart-btn";
    clearBtn.addEventListener("click", () => {
      cart.clear();
      promoMsg.textContent = "";
      render();
    });

    // Bottom wrapper
    const bottomWrapper = document.createElement("div");
    bottomWrapper.className = "bottom-wrapper";

    bottomWrapper.appendChild(summary);
    bottomWrapper.appendChild(clearBtn);

    cartList.appendChild(bottomWrapper);
  }
}

render();
