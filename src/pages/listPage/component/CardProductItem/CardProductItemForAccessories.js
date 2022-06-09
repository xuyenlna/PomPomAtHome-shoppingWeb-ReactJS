import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardProductItemForAccessories.scss";

export default function CardProductItemForAccessories(props) {
  const { firstImage, secondImage, productName, price, colorList, productId } =
    props;

  let navigate = useNavigate();
  const handleClick = () => {
    navigate(productId);
  };

  return (
    <div className="col-4 card-item" onClick={handleClick}>
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
          <h5>{productName}</h5>
        </a>
        <p>$ {price}</p>
        {colorList.map((item, index) => {
          return (
            <div
              key={index}
              className="card-itemColor"
              style={{
                backgroundColor: item.colorHexa,
                display: "inline-block",
                marginRight: "5px",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
