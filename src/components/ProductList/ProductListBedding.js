import React from "react";
import CardProductItemForBedding from "../CardProductItem/CardProductItemForBedding";

export default function ProductListBedding(props) {
  const { productList } = props;
  return (
    <div className="product__list">
      <div className="row">
        {productList.map((item) => {
          return (
            <>
              {item.colorList.map((x, index) => {
                return (
                  <CardProductItemForBedding
                    key={index}
                    productName={item.productName}
                    price={item.price}
                    firstImage={x.imageSrc[0]}
                    secondImage={x.imageSrc[1]}
                    colorName={x.colorName}
                    colorHexa={x.colorHexa}
                  />
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
}
