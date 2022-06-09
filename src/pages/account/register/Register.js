import React from "react";
import "./Register.scss";
import InputField from "../../../components/formControl/InputField";
import PasswordField from "../../../components/formControl/PasswordField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  let regex = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20}$/;
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

  const handleSubmitForm = (values) => {
    console.log("submitform", values);
  };
  return (
    <div className="form__container">
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

        <button type="submit" className="form__button">
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
