import { yupResolver } from "@hookform/resolvers/yup";
import { LinearProgress } from "@mui/material";
import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import InputField from "../../../components/formControl/InputField";
import PasswordField from "../../../components/formControl/PasswordField";
import { register } from "../../../redux/userSlice";
import "./Register.scss";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup
    .object({
      fullName: yup.string().required("Full Name is required!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!"),
      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain from 8-20 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
      retypePassword: yup
        .string()
        .required("Please retype your password")
        .oneOf([yup.ref("password"), null], "Password does not match"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (values) => {
    try {
      //auto set userName = email
      values.userName = values.email;
      console.log("submitform", values);
      const result = await dispatch(register(values));
      const user = unwrapResult(result);
      console.log("newusers", user);
      form.reset();
    } catch (error) {
      console.log("fail to register", error);
    }
  };
  const { isSubmitting } = form.formState;

  return (
    <div className="form__container">
      {isSubmitting && <LinearProgress />}
      <form
        className="form__box"
        onSubmit={form.handleSubmit(handleSubmitForm)}
      >
        <p className="form__title">CREATE ACCOUNT</p>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />

        <button type="submit" className="form__button" disabled={isSubmitting}>
          Create{" "}
        </button>
      </form>

      <p className="form__link">
        <a
          onClick={() => {
            navigate("/account/login", { replace: true });
          }}
        >
          Login
        </a>
      </p>
    </div>
  );
}
