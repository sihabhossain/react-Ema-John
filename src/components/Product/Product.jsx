import React from "react";
import "./Product.css";

const Product = (props) => {
  //   console.log(props.product);
  const { name, img, seller, quantity, price } = props.product;
  return (
    <div className="product-container">
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default Product;
