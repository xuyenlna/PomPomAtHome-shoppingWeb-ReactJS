import React from "react";
import CardProductItemForBedding from "../CardProductItem/CardProductItemForBedding";

export default function ProductListBedding(props) {
  const { productList } = props;
  return (
    <div className="product__list">
      <div className="row">
        {productList.map((item) => {
          return (
            <CardProductItemForBedding
              key={item.id}
              productName={item.productName}
              price={item.price}
              firstImage={item.imageSrc[0]}
              secondImage={item.imageSrc[1]}
              colorName={item.colorName}
              colorHexa={item.colorHexa}
              productId={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
