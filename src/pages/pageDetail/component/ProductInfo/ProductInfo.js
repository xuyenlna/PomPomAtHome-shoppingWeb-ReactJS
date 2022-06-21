import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import productApi from "../../../../api/productsApi";
import { addToCart } from "../../../../redux/cartSlice";
import { cartItemsCountSelector } from "../../../../redux/selectors";
import "./ProductInfo.scss";

export default function ProductInfo({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const countCartItems = useSelector(cartItemsCountSelector);

  const [size, setSize] = useState("");
  // const [sizeClassName, setSizeClassName] = useState("product__info-size-item");
  const [showSizeHelperText, setShowSizeHelperText] = useState(false);
  const [showQuantityHelperText, setShowQuantityHelperText] = useState(false);

  //validate form quantity
  const schema = yup.object({
    quantity: yup
      .number()
      .required("Please enter quantity")
      .min(1, "Minimum order is 0ne"),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const {
    formState: { errors },
  } = form;

  // handle select color
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

  // handle add to cart submit
  const handleAddToCartSubmit = (formValues) => {
    setShowQuantityHelperText(false); // remove the text "over stock limit incase submit form"

    const index = cartItems.findIndex(
      (item) => item.id === product.id && item.size === size
    );

    if (size === "") {
      setShowSizeHelperText(true);
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

      form.setValue("quantity", 0);
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
        {/* {product.size.map((item, index) => {
          return (
            <div
              name={item}
              key={index}
              className={sizeClassName}
              onClick={(e) => {
                const size = e.target.getAttribute("name");
                console.log(size);
                setSize(size);
                setSizeClassName("product__info-size-item");
                e.target.classList.add("size-selected");
                console.log(e.target);
              }}
            >
              {item.toUpperCase()}
            </div>
          );
        })} */}
        <label for="size" style={{ marginRight: "10px" }}>
          Choose a size:{" "}
        </label>
        <select
          required
          onChange={(e) => {
            const size = e.target.value;
            console.log(size);
            setSize(size);
            setShowSizeHelperText(false);
          }}
        >
          <option>....</option>
          {product.size.map((item, index) => {
            return (
              <option name={item} value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
        <div
          className="size-helpterText"
          style={{
            color: "red",
            display: showSizeHelperText ? "block" : "none",
          }}
        >
          Please choose a size
        </div>
      </div>

      {/* add to quantity to cart */}
      {/* <AddToCart product={product} onSubmit={handleAddToCartSubmit} /> */}
      <form
        className="product__info-quantity"
        onSubmit={form.handleSubmit(handleAddToCartSubmit)}
      >
        <p>QUANTITY</p>

        <div>
          <Controller
            name="quantity"
            control={form.control}
            render={({ field: { onChange, onBlur, value, name } }) => (
              <>
                <span
                  onClick={() => {
                    setShowQuantityHelperText(false); // max quantity
                    form.setValue(
                      name,
                      Number.parseInt(value)
                        ? Number.parseInt(value) - 1
                        : Number.parseInt(value)
                    );
                  }}
                >
                  -
                </span>
                <input value={value} onChange={onChange} onBlur={onBlur} />
                <span
                  onClick={() => {
                    const index = cartItems.findIndex(
                      (item) => item.id === product.id
                    );
                    // increase 1 if value < product in stock
                    if (
                      (index === -1 && value < product.inStock) ||
                      (index >= 0 &&
                        value + cartItems[index].quantity < product.inStock)
                    ) {
                      form.setValue(
                        name,
                        Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                      );
                    }
                    // show the helpter text if the quantity over the stock limit
                    if (
                      (index === -1 && value === product.inStock) ||
                      (index >= 0 &&
                        value + cartItems[index].quantity === product.inStock)
                    ) {
                      setShowQuantityHelperText(true);
                    }
                  }}
                >
                  +
                </span>
              </>
            )}
          />
        </div>
        {/* show errors if clicked when quantity = 0 */}
        <p style={{ color: "red", fontSize: "14px" }}>
          {errors.quantity?.message}
        </p>
        {/* show errors if exceed the stock limit */}
        <p
          style={{
            color: "red",
            fontSize: "14px",
            display: showQuantityHelperText ? "block" : "none",
          }}
        >
          "over the stock limit!!!"
        </p>

        <p>
          <span>{product.inStock}</span> IN STOCK
        </p>

        <button type="submit " className="addToCartButton">
          ADD TO CART {countCartItems !== 0 && <span>({countCartItems})</span>}
        </button>
      </form>
    </div>
  );
}
