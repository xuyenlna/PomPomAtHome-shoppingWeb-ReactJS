import React from "react";
import { useSelector } from "react-redux";
import BackToTop from "../../../components/BackToTop/BackToTop";
import CartList from "../components/CartList/CartList";
import ShippingInfo from "../components/ShippingInfo/ShippingInfo";
import Swal from "sweetalert2";

export default function PlaceAnOrder() {
  const info = useSelector((state) => state.checkOut.shippingInfo);

  const handleSubmitPlaceAnOrder = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Thank you for your purchasing!!!",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  return (
    <>
      <div
        className="checkOut row"
        style={{ width: "90%", margin: "30px auto" }}
      >
        <ShippingInfo
          email={info.email}
          phone={info.phone}
          firstName={info.firstName}
          lastName={info.lastName}
          address={info.address}
          moreAddress={info.moreAddress}
          city={info.city}
          postalCode={info.postalCode}
          country={info.country}
          onClickPlaceAnOrder={handleSubmitPlaceAnOrder}
        />
        <CartList />
      </div>
      <BackToTop />
    </>
  );
}
