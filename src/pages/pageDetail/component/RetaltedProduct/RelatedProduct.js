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
          while (list.length < 6) {
            let randomNumber = Math.floor(Math.random() * filteredList.length);
            if (list.indexOf(filteredList[randomNumber]) === -1) {
              list.push(filteredList[randomNumber]);
            }
          }
          setRelatedList(list);
        }
      } catch (error) {
        console.log("fail to fetch data", error);
      }
    })();
  }, []);

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
            <li className="row">
              <div
                className="card__item col-6 col-md-4 col-lg-2"
                key={item.id}
                onClick={() => {
                  handleClick(item.id);
                }}
              >
                <img
                  className="firstImg"
                  src={item.imageSrc[0]}
                  alt="image1"
                ></img>
                <img
                  className="secondImg"
                  src={
                    item.imageSrc[1] !== undefined
                      ? item.imageSrc[1]
                      : item.imageSrc[0]
                  }
                  alt="image2"
                ></img>
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
