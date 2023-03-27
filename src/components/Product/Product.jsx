import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, img, seller, ratings, price } = props.product;
  const AddToCart = props.AddToCart;
  return (
    <div className="product-container">
      <div>
        <img src={img} alt="" />
        <h3 className="product-name">{name}</h3>
        <p>Price: ${price}</p>

        <p>Seller:{seller}</p>
        <p>Rating: {ratings} stars</p>
      </div>
      <button onClick={() => AddToCart(props.product)} className="btn-cart">
        Add To
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
