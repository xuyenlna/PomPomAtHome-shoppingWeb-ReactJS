import React from "react";
import "./Login.scss";
import InputField from "../../../components/formControl/InputField";
import PasswordField from "../../../components/formControl/PasswordField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      email: yup
        .string()
        .required("Email is required")
        .email("Please enter a valid email address"),
      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain from 8-20 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    })
    .required();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (values) => {
    console.log("submitform", values);
  };
  return (
    <div className="form__container">
      <form
        className="form__box"
        onSubmit={form.handleSubmit(handleSubmitForm)}
      >
        <p className="form__title">LOGIN</p>
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <button type="submit" className="form__button">
          Sign in
        </button>
      </form>

      <p className="form__link">
        <a
          onClick={() => {
            navigate("/account/register", { replace: true });
          }}
        >
          Create account
        </a>
        <a
          onClick={() => {
            navigate("/account/resetPassword", { replace: true });
          }}
        >
          Forgot Password
        </a>
      </p>
    </div>
  );
}
