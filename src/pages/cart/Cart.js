import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQuantity } from "../../redux/cartSlice";
import { cartItemTotalSelector } from "../../redux/selectors";
import "./Cart.scss";

export default function Cart() {
  const dispatch = useDispatch();
  const cartTotalAmount = useSelector(cartItemTotalSelector);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div id="cart">
      <p className="cart__title">YOUR CART</p>

      <table>
        <thead>
          <tr>
            <td></td>
            <td></td>
            <td>Price</td>
            <td style={{ textAlign: "center" }}>Quantity</td>
            <td style={{ textAlign: "right" }}>Total</td>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td className="cart-img">
              <img src="https://cdn.shopify.com/s/files/1/1331/1269/products/louwie_cream_front_web_1080x.jpg?v=1620845584"></img>
            </td>
            <td className="cart-desc">
              <p>Biscayne - SAND</p>
              <p>QUEEN DUET COVER</p>
              <button>REMOVE</button>
            </td>
            <td className="cart-price">$ 333</td>
            <td className="cart-quantity">
              <div>
                <span>-</span>
                <input value={1} />
                <span>+</span>
              </div>
            </td>
            <td className="cart-amount">$ 425</td>
          </tr> */}
          {cartItems.map((item) => {
            return (
              <tr key={item.id}>
                <td className="cart-img">
                  <img src={item.product.imageSrc[0]} alt="image"></img>
                </td>
                <td className="cart-desc">
                  <p>
                    {item.product.productName} -{" "}
                    {item.product.colorName.toUpperCase()}
                  </p>
                  <p>QUEEN DUET COVER</p>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    REMOVE
                  </button>
                </td>
                <td className="cart-price">$ {item.product.salePrice}</td>
                <td className="cart-quantity">
                  <div>
                    <span onClick={() => {}}>-</span>
                    <input value={item.quantity} />
                    <span onClick={() => dispatch(increaseQuantity(item.id))}>
                      +
                    </span>
                  </div>
                </td>
                <td className="cart-amount">
                  $ {item.product.salePrice * item.quantity}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="cart__footer">
        <p>
          SUBTOTAL - ALL SALE ITEMS ARE FINAL SALE{" "}
          <span>$ {cartTotalAmount}</span>
        </p>
        <p tyle={{ textAlign: "left" }}>
          Interest-free installments by <span>Afterpay</span> available between{" "}
          <span>$35.00 - $1000.00</span>{" "}
          <a href="https://www.afterpay.com/installment-agreement">More info</a>
        </p>

        <p>Shipping & taxes calculated at checkout</p>

        <div className="cart-button">
          <button className="update-button">UPDATE CART</button>
          <button className="submit-button">CHECK OUT</button>
        </div>
      </div>
    </div>
  );
}
