import React from "react";
import "./CartList.scss";

export default function CartList() {
  return (
    <div className="cart-list col-5">
      <ul className="productItemList">
        <li>
          <div className="productItem">
            <div className="productItem-img-desc">
              <div className="item-img">
                <div className="item-quantity">3</div>
                <img
                  src="https://cdn.shopify.com/s/files/1/1331/1269/products/Curtains_Tie_Top_White_900x.jpg?v=1620845621"
                  alt="productImg"
                ></img>
              </div>
              <div className="item-desc">
                <p>TIE TOP CURTAIN - WHITE</p>
                <p>QUEEN</p>
              </div>
            </div>
            <div className="item-price">
              $ <span>113</span>
            </div>
          </div>
        </li>

        <li>
          <div className="productItem">
            <div className="productItem-img-desc">
              <div className="item-img">
                <div className="item-quantity">3</div>
                <img
                  src="https://cdn.shopify.com/s/files/1/1331/1269/products/Curtains_Tie_Top_White_900x.jpg?v=1620845621"
                  alt="productImg"
                ></img>
              </div>
              <div className="item-desc">
                <p>TIE TOP CURTAIN - WHITE</p>
                <p>QUEEN</p>
              </div>
            </div>
            <div className="item-price">
              $ <span>113</span>
            </div>
          </div>
        </li>

        <li>
          <div className="productItem">
            <div className="productItem-img-desc">
              <div className="item-img">
                <div className="item-quantity">3</div>
                <img
                  src="https://cdn.shopify.com/s/files/1/1331/1269/products/Curtains_Tie_Top_White_900x.jpg?v=1620845621"
                  alt="productImg"
                ></img>
              </div>
              <div className="item-desc">
                <p>TIE TOP CURTAIN - WHITE</p>
                <p>QUEEN</p>
              </div>
            </div>
            <div className="item-price">
              $ <span>113</span>
            </div>
          </div>
        </li>
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
          $ <span>1198</span>
        </p>
      </div>

      <div className="shippingPrice">
        <p>Shipping</p>
        <p>Calculated at next step</p>
      </div>

      <hr />
      <div className="sum">
        <p>Total</p>
        <p>
          USD <span>1198</span>
        </p>
      </div>
    </div>
  );
}
