import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartItemTotalSelector } from "../../../../redux/selectors";
import "./CartList.scss";

export default function CartList() {
  const cartTotalAmount = useSelector(cartItemTotalSelector);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="cart-list col-5">
      <ul className="productItemList">
        {cartItems.map((item, index) => {
          return (
            <li key={index}>
              <div className="productItem">
                <div className="productItem-img-desc">
                  <div className="item-img">
                    <div className="item-quantity">{item.quantity}</div>
                    <img src={item.product.imageSrc[0]} alt="productImg"></img>
                  </div>
                  <div className="item-desc">
                    <p>
                      {item.product.productName} - {item.product.colorName}
                    </p>
                    <p>{item.size}</p>
                  </div>
                </div>
                <div className="item-price">
                  $ <span>{item.quantity * item.product.salePrice}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <hr />
      <div className="promotion-code">
        <input placeholder="Gift card or discount code" />
        <button>Apply</button>
      </div>

      <hr />
      <div className="totalPrice">
        <p>Subtotal - ALL SALE ITEMS ARE FINAL SALE</p>
        <p>
          $ <span>{cartTotalAmount}</span>
        </p>
      </div>

      <div className="shippingPrice">
        <p>Shipping</p>
        <p>$0</p>
      </div>

      <hr />
      <div className="sum">
        <p>Total</p>
        <p>
          USD <span>{cartTotalAmount}</span>
        </p>
      </div>
    </div>
  );
}
