import React from "react";
import { useNavigate } from "react-router-dom";
import "./ShippingInfo.scss";

export default function ShippingInfo(props) {
  const navigate = useNavigate();
  const {
    email,
    phone,
    firstName,
    lastName,
    address,
    moreAddress,
    city,
    postalCode,
    country,
    onClickPlaceAnOrder,
  } = props;
  return (
    <div className="shipping-info col-12 col-md-7">
      {/* link-title */}
      <div className="linkTitle">
        <a
          style={{ color: "#e37648" }}
          onClick={() => navigate("/cart", { replace: true })}
        >
          Cart
        </a>
        <i style={{ margin: " 0 15px" }} class="fa fa-angle-right"></i>
        <a
          style={{ color: "#e37648" }}
          onClick={() => navigate("/cart/checkout", { replace: true })}
        >
          Information
        </a>
        <i style={{ margin: " 0 15px" }} class="fa fa-angle-right"></i>
        <span>Shipping </span>
        <i style={{ margin: " 0 15px" }} class="fa fa-angle-right"></i>
        <span style={{ color: "#8e8e8e" }}>Payment </span>
        <i style={{ margin: " 0 15px" }} class="fa fa-angle-right"></i>
      </div>

      {/* contact info*/}
      <div class="contact-info">
        <div className="row contact-info-detail">
          <div class="col-2">Contact</div>
          <div class="col-6 col-lg-8">
            {email} / {phone}
          </div>
          <div
            class="col-4 col-lg-2"
            style={{ color: "#e37648", cursor: "pointer" }}
            onClick={() => navigate("/cart/checkout", { replace: true })}
          >
            Change
          </div>
        </div>

        <div className="row contact-info-detail">
          <div class="col-2">Ship to</div>
          <div class="col-6 col-lg-8">
            {firstName} {lastName}
            {address}, {moreAddress}, {city}, {postalCode}, {country}
          </div>
          <div
            class="col-4 col-lg-2"
            style={{ color: "#e37648", cursor: "pointer" }}
            onClick={() => navigate("/cart/checkout", { replace: true })}
          >
            Change
          </div>
        </div>
      </div>

      {/* Shipping method */}
      <div className="shipping-title">
        <p>Shipping method</p>
      </div>
      <div className="shipping-method">
        <div>
          <p>USPS Priority Mail International</p>
          <p>6 to 10 business days</p>
        </div>
        <span>$0</span>
      </div>

      {/* submit */}
      <div className="submit">
        <div
          className="linkTitle"
          onClick={() => navigate("/cart/checkout", { replace: true })}
        >
          <i class="fa fa-angle-left"></i>
          <a>Return to Information</a>
        </div>
        <button
          class="submitButton"
          type="submit"
          onClick={onClickPlaceAnOrder}
        >
          PLACE AN ORDER
        </button>
      </div>
    </div>
  );
}
