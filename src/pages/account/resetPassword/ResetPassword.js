import React from "react";
import "./ResetPassword.scss";
import InputField from "../../../components/formControl/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      email: yup
        .string()
        .required("Email is required")
        .email("Please enter a valid email address"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      email: "",
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
        <p className="form__title">RESET YOUR PASSWORD</p>
        <p style={{ margin: "-10px 0 20px" }}>
          We will send you an email to reset your password.
        </p>
        <InputField name="email" label="Email" form={form} />
        <button type="submit" className="form__button">
          Submit
        </button>
      </form>

      <p className="form__link">
        <a
          onClick={() => {
            navigate("/account/login", { replace: true });
          }}
        >
          Cancel
        </a>
      </p>
    </div>
  );
}
