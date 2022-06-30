import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardProductItem.scss";

export default function CardProductItem(props) {
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
    <div className="card-item col-12 col-md-6 col-lg-4" onClick={handleClick}>
      {onSale == "true" && <div className="onSale">SALE</div>}
      <div className="card-img">
        <a>
          <img
            className="card-firstItemImg"
            src={firstImage}
            alt="card-img"
          ></img>
          <img
            className="card-secondItemImg"
            src={secondImage != undefined ? secondImage : firstImage}
            alt="card-img"
          ></img>
        </a>
      </div>

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
                textDecorationThickness: "2px",
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
