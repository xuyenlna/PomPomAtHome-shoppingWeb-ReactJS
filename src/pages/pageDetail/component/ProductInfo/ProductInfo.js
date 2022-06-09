import React, { useEffect, useState } from "react";
import "./ProductInfo.scss";
import "../AddToCart/AddToCart";
import AddToCart from "../AddToCart/AddToCart";
import productApi from "../../../../api/productsApi";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductInfo({ product }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleSelectColor = (colorName) => {
    (async () => {
      try {
        // the list have the same productName but different colors
        const productList = await productApi.filterByProductName(
          product.productName
        );
        const newProduct = productList.find((x) => x.colorName === colorName);
        const newPathName = pathname.replace(product.id, newProduct.id);
        navigate(newPathName, { replace: true });
      } catch (error) {
        console.log("fail to fetch data", error);
      }
    })();
  };

  const handleAddToCartSubmit = (values) => {
    console.log("addTocart", values);
  };
  return (
    <div className="col-4 product__info">
      <p className="product__info-price">$ {product.price}</p>
      <p className="product__info-name">
        {product.productName.toUpperCase()} - {product.colorName.toUpperCase()}
      </p>
      <p>Overview</p>
      <p className="product__info-desc">{product.desc}</p>

      <div className="product__info-colorList">
        <p>SELECT COLOR</p>
        <div>
          {product.colorList.map((item, index) => {
            return (
              <a key={index}>
                <div
                  onClick={() => {
                    handleSelectColor(item.colorName);
                  }}
                  className="product__info-colorItem"
                  style={{ backgroundColor: item.colorHexa }}
                ></div>
              </a>
            );
          })}
        </div>
      </div>

      <div className="product__info-size">
        <p>SELECT SIZE</p>
        {product.size.map((item, index) => {
          return <div key={index}>{item.toUpperCase()}</div>;
        })}
      </div>

      {/* add to cart */}
      <AddToCart product={product} onSubmit={handleAddToCartSubmit} />
    </div>
  );
}
