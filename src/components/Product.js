import React from "react";
import "./Product.css";

function Product({ post }) {

  return (
    <div className="product">
      <div className="product__info">
        <p>{post.name}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{post.price}</strong>
        </p>
        <div className="product__rating">
          {Array(5)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={post.image} alt="" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product; 