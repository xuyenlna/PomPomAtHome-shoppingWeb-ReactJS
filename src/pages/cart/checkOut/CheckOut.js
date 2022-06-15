import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackToTop from "../../../components/BackToTop/BackToTop";
import { addInfo } from "../../../redux/checkOutSlice";
import CartList from "../components/CartList/CartList";
import Information from "../components/Information/Information";

export default function CheckOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmitForm = (values) => {
    console.log("submitform", values);
    navigate("/cart/checkout/place-an-order", { replace: "true" });
    dispatch(
      addInfo({
        email: values.email,
        phone: values.phone,
        firstName: values.firstName,
        lastName: values.lastName,
        address: values.address,
        moreAddress: values.moreAddress,
        city: values.city,
        postalCode: values.postalCode,
        country: values.country,
      })
    );
  };
  return (
    <>
      <div
        className="checkOut row"
        style={{ width: "90%", margin: "30px auto" }}
      >
        <Information onSubmit={handleSubmitForm} />
        <CartList />
      </div>

      <BackToTop />
    </>
  );
}
