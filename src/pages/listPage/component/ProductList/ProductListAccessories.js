import React from "react";
import CardProductItemForAccessories from "../CardProductItem/CardProductItemForAccessories";

export default function ProductListAccessories(props) {
  const { productList } = props;
  return (
    <div className="product__list">
      <div className="row">
        {productList.map((item) => {
          return (
            <CardProductItemForAccessories
              key={item.id}
              productName={item.productName}
              price={item.price}
              firstImage={item.imageSrc[0]}
              secondImage={item.imageSrc[1]}
              colorList={item.colorList}
              productId={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
