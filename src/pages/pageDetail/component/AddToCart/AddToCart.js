import React, { useState } from "react";
import "./AddToCart.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller } from "react-hook-form";
import { FormControl, FormHelperText } from "@mui/material";
import { useSelector } from "react-redux";
import { cartItemsCountSelector } from "../../../../redux/selectors";

export default function AddToCart({ product, onSubmit = null }) {
  const [showQuantityHelperText, setShowQuantityHelperText] = useState(false);

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

  const countCartItems = useSelector(cartItemsCountSelector);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <form
        className="product__info-quantity"
        onSubmit={form.handleSubmit(() => {
          setShowQuantityHelperText(false);
          onSubmit();
        })}
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
        <p style={{ color: "red", fontSize: "14px" }}>
          {errors.quantity?.message}
        </p>
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
    </>
  );
}
