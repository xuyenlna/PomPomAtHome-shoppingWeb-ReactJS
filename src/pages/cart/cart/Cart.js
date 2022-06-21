import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackToTop from "../../../components/BackToTop/BackToTop";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  setQuantity,
} from "../../../redux/cartSlice";
import { cartItemTotalSelector } from "../../../redux/selectors";
import "./Cart.scss";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartTotalAmount = useSelector(cartItemTotalSelector);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [showTextErrors, setShowTextErrors] = useState(false);
  const [value, setValue] = useState();

  const handleQuantityChange = (e, id, size) => {
    let newQuantity = e.target.value.parseInt();
    console.log(newQuantity);
    dispatch(setQuantity(id, newQuantity, size));
    setValue(newQuantity);
  };

  return (
    <>
      {/* cart title */}
      {cartItems.length === 0 && (
        <div id="cart">
          <p className="cart__title">YOUR CART IS EMPTY</p>
        </div>
      )}
      {cartItems.length != 0 && (
        <div id="cart">
          <p className="cart__title">YOUR CART</p>
          <table>
            {/* table head */}
            <thead>
              <tr>
                <td></td>
                <td></td>
                <td>Price</td>
                <td style={{ textAlign: "center" }}>Quantity</td>
                <td style={{ textAlign: "right" }}>Total</td>
              </tr>
            </thead>

            {/* table body */}
            <tbody>
              {cartItems.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="cart-img">
                      <img src={item.product.imageSrc[0]} alt="image"></img>
                    </td>

                    <td className="cart-desc">
                      <p>
                        {item.product.productName} -{" "}
                        {item.product.colorName.toUpperCase()}
                      </p>
                      <p>{item.size}</p>
                      <button
                        onClick={() => {
                          dispatch(
                            removeFromCart({ id: item.id, size: item.size })
                          );
                        }}
                      >
                        REMOVE
                      </button>
                    </td>

                    <td className="cart-price">$ {item.product.salePrice}</td>

                    <td className="cart-quantity">
                      <div>
                        <span
                          onClick={() => {
                            // setShowTextErrors(false);
                            if (item.quantity === 1) {
                              dispatch(
                                removeFromCart({ id: item.id, size: item.size })
                              );
                            }
                            if (item.quantity > 1) {
                              dispatch(
                                decreaseQuantity({
                                  id: item.id,
                                  size: item.size,
                                })
                              );
                            }
                          }}
                        >
                          -
                        </span>
                        <input
                          placeholder={item.quantity}
                          value={value}
                          type="text"
                          onChange={(event) =>
                            handleQuantityChange(event, {
                              id: item.id,
                              size: item.size,
                            })
                          }
                        />
                        <span
                          onClick={() => {
                            if (item.quantity < item.product.inStock) {
                              dispatch(
                                increaseQuantity({
                                  id: item.id,
                                  size: item.size,
                                })
                              );
                            }
                            if (item.quantity === item.product.inStock) {
                              // setShowTextErrors(true);
                            }
                          }}
                        >
                          +
                        </span>
                      </div>
                      {/* text errors  */}
                      {/* <div 
                        className="text-errors"
                        style={{
                          color: "red",
                          fontSize: "12px",
                          textAlign: "right",
                          display: showTextErrors ? "block" : "none",
                        }}
                      >
                        You access the limit in stock!
                      </div> */}
                    </td>

                    <td className="cart-amount">
                      ${" "}
                      {(
                        item.product.salePrice * item.quantity
                      ).toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="cart__footer">
            <p>
              SUBTOTAL - ALL SALE ITEMS ARE FINAL SALE{" "}
              <span>$ {cartTotalAmount.toLocaleString()}</span>
            </p>
            <p tyle={{ textAlign: "left" }}>
              Interest-free installments by <span>Afterpay</span> available
              between <span>$35.00 - $1000.00</span>{" "}
              <a href="https://www.afterpay.com/installment-agreement">
                More info
              </a>
            </p>

            <p>Shipping & taxes calculated at checkout</p>

            <div className="cart-button">
              <button className="update-button">UPDATE CART</button>
              <button
                className="submit-button"
                onClick={() => {
                  navigate("/cart/checkout", { replace: true });
                }}
              >
                CHECK OUT
              </button>
            </div>
          </div>
        </div>
      )}
      <BackToTop />
    </>
  );
}
