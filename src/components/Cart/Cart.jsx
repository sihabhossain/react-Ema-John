import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // Order summary calculation
  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  const tax = (total * 7) / 100;
  const grandTotal = total + totalShipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Items: {cart.length}</p>
      <p>Total Price: {total}</p>
      <p>Total Shipping: {totalShipping}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
