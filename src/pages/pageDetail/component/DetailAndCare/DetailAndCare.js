import React from "react";

export default function DetailAndCare({ product }) {
  return (
    <div className="detailAndCare">
      <p>Details & Care: {product.detail}</p>
      <p>{product.care}</p>
    </div>
  );
}
