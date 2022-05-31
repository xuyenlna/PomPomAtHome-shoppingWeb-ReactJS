import React from "react";
import CardProductItemForAccessories from "../CardProductItem/CardProductItemForAccessories";

export default function ProductListAccessories(props) {
  const { productList } = props;
  return (
    <div className="product__list">
      <div className="row">
        {productList.map((item, index) => {
          return (
            <CardProductItemForAccessories
              key={index}
              productName={item.productName}
              price={item.price}
              firstImage={item.imgSrc[0]}
              secondImage={item.imgSrc[1]}
              colorList={item.colorList}
            />
          );
        })}
      </div>
    </div>
  );
}
