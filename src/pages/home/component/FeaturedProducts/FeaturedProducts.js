import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productApi from "../../../../api/productsApi";
import "./FeaturedProducts.scss";

export default function FeaturedProducts() {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        // fetch list of product in the same category
        const allProductList = await productApi.getAll();

        // get the random list of 6 items
        let list = [];
        while (list.length < 6) {
          let randomNumber = Math.floor(Math.random() * allProductList.length);
          if (list.indexOf(allProductList[randomNumber]) === -1) {
            list.push(allProductList[randomNumber]);
          }
        }
        setProductList(list);
      } catch (error) {
        console.log("fail to fetch data", error);
      }
    })();
  }, []);

  const handleClick = (id, params) => {
    navigate(`${params}/${id}`, { replace: true });
  };

  return (
    <div className="home-featuredProduct">
      <p className="title">RELATED</p>
      <hr />
      <div className="featuredProductList row">
        {productList.map((item) => {
          return (
            <div
              className="col-6 col-md-4 col-lg-2 card__item"
              key={item.id}
              onClick={() => {
                handleClick(item.id, item.params);
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
              {item.imageSrc[1] !== undefined && (
                <img
                  className="secondImg"
                  src={item.imageSrc[1]}
                  alt="image2"
                ></img>
              )}
              <p>
                {item.productName.toUpperCase()}- {item.colorName.toUpperCase()}
              </p>
              <p>$ {item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
