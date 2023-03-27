import React from "react";
import "./Product.css";

const Product = (props) => {
  //   console.log(props.product);
  const { name, img, seller, ratings, price } = props.product;
  return (
    <div className="product-container">
      <div>
        <img src={img} alt="" />
        <h3 className="product-name">{name}</h3>
        <p>Price: ${price}</p>

        <p>Seller:{seller}</p>
        <p>Rating: {ratings} stars</p>
      </div>
      <button className="btn-cart">Add To Cart</button>
    </div>
  );
};

export default Product;
