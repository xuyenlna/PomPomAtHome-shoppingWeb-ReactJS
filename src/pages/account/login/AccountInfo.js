import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/userSlice";
import "./AccountInfo.scss";

export default function AccountInfo() {
  const user = useSelector((state) => state.user.current);
  const dispatch = useDispatch();
  return (
    <div className="accountInfo">
      <div className="infoTitle">
        <p className="title">MY ACCOUNT</p>
        <button className="logOutBtn" onClick={() => dispatch(logout())}>
          LOG OUT
        </button>
      </div>

      <hr />
      <div className="accountContent row">
        <div className="col-7 history accountContent-item">
          <p>Order History</p>
          <p>You haven't placed any orders yet.</p>
          {/* order list here */}
        </div>
        <div className="col-5 accountDetail accountContent-item">
          <p>Account Details</p>
          <p>{user.email}</p>
          <p>{user.name} </p>
        </div>
      </div>
    </div>
  );
}
