import React from "react";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="bgLoading">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif"
        alt="loading..."
      />
    </div>
  );
}
