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
    <div className="col-4 card-item" onClick={handleClick}>
      {onSale == "true" && <div className="onSale">SALE</div>}
      <div className="card-img">
        <a>
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
