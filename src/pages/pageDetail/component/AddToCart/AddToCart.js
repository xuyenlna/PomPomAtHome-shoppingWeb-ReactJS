import React from "react";
import "./AddToCart.scss";

export default function AddToCart({ product }) {
  return (
    <>
      {/* <div className="product__info-quantity">
        <p>QUANTITY</p>
        <div>
          <span>-</span>
          <input value={1} />
          <span>+</span>
        </div>
        <p>
          <span>{product.inStock}</span> IN STOCK
        </p>
      </div>

      <div className="addToCartButton">
        ADD TO CART. <span> $230</span>
      </div> */}

      <form className="product__info-quantity">
        <p>QUANTITY</p>

        <div>
          <span>-</span>
          <input value={1} />
          <span>+</span>
        </div>
        <p>
          <span>{product.inStock}</span> IN STOCK
        </p>

        <div className="addToCartButton">ADD TO CART</div>
      </form>
    </>
  );
}
