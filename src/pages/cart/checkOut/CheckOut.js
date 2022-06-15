import React from "react";
import BackToTop from "../../../components/BackToTop/BackToTop";
import CartList from "../components/CartList/CartList";
import Information from "../components/Information/Information";

export default function CheckOut() {
  return (
    <>
      <div
        className="checkOut row"
        style={{ width: "90%", margin: "30px auto" }}
      >
        <Information />
        <CartList />
      </div>

      <BackToTop />
    </>
  );
}
