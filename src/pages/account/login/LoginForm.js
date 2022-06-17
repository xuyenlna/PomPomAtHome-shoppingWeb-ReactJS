import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import InputField from "../../../components/formControl/InputField";
import PasswordField from "../../../components/formControl/PasswordField";
import Loading from "../../../components/Loading/Loading";
import "./LoginForm.scss";

export default function LoginForm({ onSubmit }) {
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

  return (
    <div className="form__container">
      {form.formState.isSubmitting && <Loading />}
      <form className="form__box" onSubmit={form.handleSubmit(onSubmit)}>
        <p className="form__title">LOGIN</p>
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <button
          type="submit"
          className="form__button"
          disabled={form.formState.isSubmitting}
        >
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
