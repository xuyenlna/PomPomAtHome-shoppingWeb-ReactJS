import React from "react";
import BackToTop from "../../../components/BackToTop/BackToTop";
import CartList from "../components/CartList/CartList";
import ShippingInfo from "../components/ShippingInfo/ShippingInfo";

export default function PlaceAnOrder() {
  return (
    <>
      <div
        className="checkOut row"
        style={{ width: "90%", margin: "30px auto" }}
      >
        <ShippingInfo />
        <CartList />
      </div>
      <BackToTop />
    </>
  );
}
