import React from "react";

export default function PageNotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <p
        style={{
          fontSize: "40px",
        }}
      >
        404 PAGE NOT FOUND!
      </p>
      <p
        style={{
          fontSize: "18px",
        }}
      >
        The page you requested does not exist. Click{" "}
        <a
          href="/"
          style={{
            fontSize: "18px",
            textDecoration: "underline",
            color: "#3a434d",
          }}
        >
          here
        </a>{" "}
        to continue shopping.
      </p>
    </div>
  );
}
