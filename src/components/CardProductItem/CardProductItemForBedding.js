import React from "react";
import "./CardProductItemForBedding.scss";

export default function CardProductItemForBedding(props) {
  const { firstImage, secondImage, productName, colorName, price, colorHexa } =
    props;

  return (
    <div className="col-4 card-item">
      <a className="card-img">
        {/* <img
          className="card-secondItemImg"
          src={secondImage}
          alt="card-img"
          style={{ position: "absolute", opacity: 0 }}
        ></img> */}

        <img
          className="card-firstItemImg"
          src={firstImage}
          alt="card-img"
          style={{ opacity: 1 }}
        ></img>
      </a>

      <div className="card-itemInfo">
        <a>
          <h5>
            {productName} - {colorName.toUpperCase()}
          </h5>
        </a>
        <p>$ {price}</p>
        <div
          className="card-itemColor"
          style={{ backgroundColor: colorHexa }}
        ></div>
      </div>
    </div>
  );
}
