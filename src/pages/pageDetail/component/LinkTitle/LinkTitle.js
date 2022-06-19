import React from "react";
import "./LinkTitle.scss";
import { useNavigate } from "react-router-dom";

export default function LinkTitle({ product }) {
  const navigate = useNavigate();

  return (
    <div className="linkTitle">
      <a onClick={() => navigate("/", { replace: true })}>HOME</a>
      <i class="fa fa-angle-right"></i>
      <a
        onClick={() => {
          navigate(`/${product.params}`, { replace: true });
        }}
      >
        {product.categoryName.toUpperCase()}{" "}
      </a>
      <i class="fa fa-angle-right"></i>
      {product.productName.toUpperCase()}
    </div>
  );
}
