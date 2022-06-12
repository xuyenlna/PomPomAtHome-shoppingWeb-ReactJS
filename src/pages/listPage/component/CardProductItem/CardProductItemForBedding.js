import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardProductItemForBedding.scss";

export default function CardProductItemForBedding(props) {
  const {
    firstImage,
    secondImage,
    productName,
    colorName,
    price,
    colorHexa,
    productId,
    onSale,
    salePrice,
  } = props;

  let navigate = useNavigate();
  const handleClick = () => {
    navigate(productId);
  };
  return (
    <div className="col-4 card-item" onClick={handleClick}>
      {onSale == "true" && <div className="onSale">SALE</div>}
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

        {onSale === "false" && <span>$ {price}</span>}

        {onSale === "true" && (
          <>
            <span
              style={{
                textDecoration: "line-through",
              }}
            >
              $ {price}
            </span>
            <span>$ {salePrice}</span>
          </>
        )}

        <div
          className="card-itemColor"
          style={{ backgroundColor: colorHexa }}
        ></div>
      </div>
    </div>
  );
}
