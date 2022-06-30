import React from "react";
import "./Information.scss";
import InputField from "../../../../components/formControl/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";

export default function Information({ onSubmit }) {
  const navigate = useNavigate();
  const schema = yup
    .object({
      email: yup
        .string()
        .required("Email is required")
        .email("Please enter a valid email address"),
      country: yup.string().required("Country is required"),
      firstName: yup.string().required("First Name is required"),
      lastName: yup.string().required("Last Name is required"),
      moreAddress: yup.string(),
      address: yup.string().required("Address is required"),
      city: yup.string().required("City is required"),
      postalCode: yup.string(),
      phone: yup.number().required("Number is required"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      email: "",
      country: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      postalCode: "",
      phone: "",
    },
    resolver: yupResolver(schema),
  });

  return (
    <div className="information col-12 col-md-7">
      {/* link-title */}
      <div className="linkTitle">
        <a
          style={{ color: "#e37648" }}
          onClick={() => navigate("/cart", { replace: true })}
        >
          Cart
        </a>
        <i style={{ margin: " 0 15px" }} class="fa fa-angle-right"></i>
        <span>Information </span>
        <i style={{ margin: " 0 15px" }} class="fa fa-angle-right"></i>
        <span style={{ color: "#8e8e8e" }}>Shipping </span>
        <i style={{ margin: " 0 15px" }} class="fa fa-angle-right"></i>
        <span style={{ color: "#8e8e8e" }}>Payment </span>
        <i style={{ margin: " 0 15px" }} class="fa fa-angle-right"></i>
      </div>

      {/* payment */}
      <div className="payment">
        <p>Express Checkout</p>
        <div className="payment-wrap">
          <div className="payment-item">
            <a>
              <img
                src="data:image/png;base64,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"
                alt="paypal-logo"
              ></img>
            </a>
          </div>

          <div className="payment-item">
            <a>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGih8K2bsdWZU9S-YAJIxlIOojQiJ-YkzRTw&usqp=CAU"
                alt="google-pay"
              ></img>
            </a>
          </div>
        </div>
      </div>

      {/* contact & shipping info */}
      <form
        className="information-info "
        style={{ width: "90%" }}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="information-title information-contact">
          <p>Contact information</p>
          <p>
            Already have an account?{" "}
            <span onClick={() => navigate("/account/login", { replace: true })}>
              Login
            </span>
          </p>
        </div>
        <InputField name="email" label="Email" form={form} />
        <div className="emailMe information-checkbox">
          <input
            type="checkbox"
            id="emailMe"
            value="Email me with news and offers"
          />
          <label for="emailMe">Email me with news and offers </label>
        </div>

        <div className="information-title">
          <p>Shipping address</p>
        </div>
        <InputField name="country" label="Country" form={form} />
        <div class="row">
          <div class="col-6">
            <InputField name="firstName" label="First Name" form={form} />
          </div>
          <div class="col-6">
            <InputField name="lastName" label="Last Name" form={form} />
          </div>
        </div>

        <InputField name="address" label="Address" form={form} />
        <InputField name="moreAddress" label="...." form={form} />

        <div class="row">
          <div class="col-6">
            <InputField name="city" label="City" form={form} />
          </div>
          <div class="col-6">
            <InputField
              name="postalCode"
              label="Postal code (optional)"
              form={form}
            />
          </div>
        </div>
        <InputField name="phone" label="Phone" form={form} />

        <div className="saveInfo information-checkbox">
          <input type="checkbox" id="saveInfo" value="saveInfo" />
          <label for="saveInfo">Save this information for next time </label>
        </div>
        <div className="textMe information-checkbox">
          <input type="checkbox" id="textMe" value="textMe" />
          <label for="textMe">Text me with news and offers </label>
        </div>

        <div className="submit">
          <div
            className="linkTitle"
            onClick={() => navigate("/cart", { replace: true })}
          >
            <i class="fa fa-angle-left"></i>
            <a>Return to Cart</a>
          </div>

          <button class="submitButton" type="submit">
            Continue to shipping
          </button>
        </div>
      </form>
    </div>
  );
}
