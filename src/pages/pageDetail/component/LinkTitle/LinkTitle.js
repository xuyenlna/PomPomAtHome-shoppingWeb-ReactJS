import React from "react";
import "./LinkTitle.scss";

export default function LinkTitle({ product }) {
  return (
    <div className="linkTitle">
      <a>HOME</a>
      <i class="fa fa-angle-right"></i>
      <a>{product.categoryName.toUpperCase()} </a>
      <i class="fa fa-angle-right"></i>
      {product.productName.toUpperCase()}
    </div>
  );
}
