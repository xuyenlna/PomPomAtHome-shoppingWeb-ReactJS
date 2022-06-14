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
          if (list.indexOf(allProductList[randomNumber] === -1)) {
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
      <ul className="featuredProductList">
        {productList.map((item) => {
          return (
            <li>
              <div
                className="card__item"
                key={item.id}
                onClick={() => {
                  handleClick(item.id, item.params);
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
