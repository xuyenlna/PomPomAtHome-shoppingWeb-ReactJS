import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import productApi from "../../../../api/productsApi";
import { addToCart } from "../../../../redux/cartSlice";
import AddToCart from "../AddToCart/AddToCart";
import "./ProductInfo.scss";

export default function ProductInfo({ product }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [size, setSize] = useState("");
  const [className, setClassName] = useState("product__info-size-item");

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

  const handleSelectSize = (sizeSelected) => {
    if (size === sizeSelected) {
      setSize("");
    } else {
      setSize(sizeSelected);
    }
  };

  // handle submit add to cart form
  const handleAddToCartSubmit = (formValues) => {
    const index = cartItems.findIndex(
      (item) => item.id === product.id && item.size === size
    );

    if (size === "") {
      alert("pls choose the size");
    }
    if (
      (index === -1 && size !== "") ||
      (index >= 0 &&
        formValues.quantity + cartItems[index].quantity <= product.inStock &&
        size !== "")
    ) {
      dispatch(
        addToCart({
          id: product.id,
          product,
          quantity: formValues.quantity,
          size: size,
        })
      );
    }
  };

  return (
    <div className="col-4 product__info">
      {/* price */}
      {product.onSale === "false" && (
        <p className="product__info-price">$ {product.price}</p>
      )}
      {product.onSale === "true" && (
        <>
          <p className="product__info-price">$ {product.salePrice}</p>
          <p
            className="product__info-price"
            style={{
              textDecoration: "line-through",
              fontSize: "18px",
              fontStyle: "italic",
              color: "#ccc",
            }}
          >
            $ {product.price}
          </p>
        </>
      )}

      {/* name */}
      <p className="product__info-name">
        {product.productName.toUpperCase()} - {product.colorName.toUpperCase()}
      </p>

      {/* promotion code */}
      {product.onSale === "true" && (
        <p style={{ color: "red", fontWeight: "600" }}>
          NOW {product.promotionCode} OFF
        </p>
      )}
      {/* description */}
      <p>Overview</p>
      <p className="product__info-desc">{product.desc}</p>

      {/* color List */}
      <div className="product__info-colorList">
        <p>SELECT COLOR</p>
        <div>
          {product.colorList.map((item, index) => {
            if (product.colorName === item.colorName) {
              return (
                <a key={index}>
                  <div
                    onClick={() => {
                      handleSelectColor(item.colorName);
                    }}
                    className="product__info-colorItem active-color "
                    style={{ backgroundColor: item.colorHexa }}
                  ></div>
                </a>
              );
            }
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

      {/* size List */}
      <div className="product__info-size">
        <p>SELECT SIZE</p>
        {product.size.map((item, index) => {
          return (
            <div
              name={item}
              key={index}
              className={className}
              onClick={(e) => {
                const size = e.target.getAttribute("name");
                e.currentTarget.classList.toggle("size-selected");
                handleSelectSize(size);
              }}
            >
              {item.toUpperCase()}
            </div>
          );
        })}
      </div>

      {/* add to cart */}
      <AddToCart product={product} onSubmit={handleAddToCartSubmit} />
    </div>
  );
}
