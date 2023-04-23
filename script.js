//your code here
// Get all the prices from the table
const prices = document.querySelectorAll('[data-ns-test="prices"]');

// Calculate the total price by summing up all the prices
let totalPrice = 0;
for (let i = 0; i < prices.length; i++) {
  totalPrice += parseFloat(prices[i].innerText);
}

// Add the total price to the table
const grandTotalCell = document.querySelector('[data-ns-test="grandTotal"]');
grandTotalCell.innerText = totalPrice.toFixed(2);
