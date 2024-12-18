document.getElementById("calculateBtn").addEventListener("click", function () {
  const price = parseFloat(document.getElementById("price").value) || 0;
  const quantity = parseInt(document.getElementById("quantity").value) || 0;
  const location = document.getElementById("location").value;
  const vatPercentage = parseInt(document.getElementById("vat").value) || 0;

  
  const subtotal = price * quantity;
  const deliveryCharge = location === "inside" ? 80 : 120;
  const vat = (subtotal * vatPercentage) / 100;
  const totalCost = subtotal + deliveryCharge + vat;
  document.getElementById("totalCost").textContent = totalCost.toFixed(2);
});
