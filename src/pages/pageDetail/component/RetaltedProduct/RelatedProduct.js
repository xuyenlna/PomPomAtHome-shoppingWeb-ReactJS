import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import productApi from "../../../../api/productsApi";
import "./RelatedProduct.scss";

export default function RelatedProduct({ product }) {
  const [relatedList, setRelatedList] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    (async () => {
      try {
        // fetch list of product in the same category
        const productListByCategory = await productApi.filterByCategoryName(
          product.categoryName
        );
        const filteredList = productListByCategory.filter(
          (x) => x.id !== product.id
        );

        // get the random list of 6 items
        if (filteredList.length <= 6) {
          setRelatedList(filteredList);
        }
        if (filteredList.length > 6) {
          let list = [];
          for (let i = 0; i < 6; i++) {
            list.push(filteredList[i]);
          }
          setRelatedList(list);
        }
      } catch (error) {
        console.log("fail to fetch data", error);
      }
    })();
  }, [product]);

  const handleClick = (id) => {
    const newPathName = pathname.replace(product.id, id);
    navigate(newPathName, { replace: true });
  };

  return (
    <div className="relatedProduct">
      <p>RELATED</p>
      <hr />
      <ul className="relatedProductList">
        {relatedList.map((item) => {
          return (
            <li>
              <div
                className="card__item"
                key={item.id}
                onClick={() => {
                  handleClick(item.id);
                }}
              >
                <img src={item.imageSrc[0]} alt=""></img>
                <p>
                  {item.productName.toUpperCase()}-{" "}
                  {item.colorName.toUpperCase()}
                </p>
                <p>$ {item.price}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}