import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const cart = useLoaderData();
  console.log(cart);
  return (
    <div className="shop-container">
      <div className="products-container">
        <h1>order page: {cart.length}</h1>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;