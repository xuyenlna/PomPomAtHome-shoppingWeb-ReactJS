import React from "react";
import CardProductItem from "../CardProductItem/CardProductItem";

export default function ProductList(props) {
  const { productList } = props;
  return (
    <div className="product__list">
      <div className="row">
        {productList.map((item) => {
          return (
            <CardProductItem
              key={item.id}
              productName={item.productName}
              price={item.price}
              firstImage={item.imageSrc[0]}
              secondImage={item.imageSrc[1]}
              colorName={item.colorName}
              colorHexa={item.colorHexa}
              productId={item.id}
              onSale={item.onSale}
              salePrice={item.salePrice}
            />
          );
        })}
      </div>
    </div>
  );
}
