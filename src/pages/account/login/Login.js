import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { login } from "../../../redux/userSlice";
import AccountInfo from "./AccountInfo";
import LoginForm from "./LoginForm";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.email;

  const handleSubmitForm = async (values) => {
    try {
      console.log("loginForm", values);
      const result = await dispatch(login(values));
      unwrapResult(result);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login successfully!!",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/", { replace: true });
    } catch (error) {
      console.log("fail to login", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Login fail!!",
        showConfirmButton: true,
      });
    }
  };
  return (
    <>
      {!isLoggedIn && <LoginForm onSubmit={handleSubmitForm} />}
      {isLoggedIn && <AccountInfo />}
    </>
  );
}
