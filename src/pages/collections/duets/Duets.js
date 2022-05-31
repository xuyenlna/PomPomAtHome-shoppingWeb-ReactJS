import React, { useEffect, useState } from "react";
import "./Duets.scss";
import productApi from "../../../api/productsApi";
import Filters from "../../../components/Filters/Filters";
import Sorts from "../../../components/Sorts/Sorts";
import { CATEGORIES } from "../../../utility/constants";
import {
  getColorAndHexaList,
  getFabricList,
  getSizeList,
} from "../../../components/filterData";
import ProductListBedding from "../../../components/ProductList/ProductListBedding";
import ProductListAccessories from "../../../components/ProductList/ProductListAccessories";

export default function Duets() {
  const categoryName = CATEGORIES.DUET_COVER;
  const [productList, setProductList] = useState([]);
  let [filters, setFilters] = useState({
    categoryName: "duet cover",
    _sort: "productName&_order=asc",
  });

  // get Data of all DuetCollection, filter color list, size list and fabric list
  useEffect(() => {
    (async () => {
      try {
        console.log("filter update", filters);
        const data = await productApi.getAll(filters);
        console.log("callAPI data", data);
        setProductList(data);
      } catch (error) {
        console.log("fail to fetch data");
      }

      // setLoading(false)
    })();
  }, [filters]);

  let colorList = getColorAndHexaList(productList);
  let sizeList = getSizeList(productList);
  let fabricList = getFabricList(productList);

  const handleSortChange = (newSortValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: newSortValue,
    }));
    console.log("handleSortChange", filters);
  };
  return (
    <div className="product-collection">
      <div className="product-general">
        <h1 className="product-title">DUVETS & DUVET SETS</h1>

        <Filters
          colorList={colorList}
          sizeList={sizeList}
          fabricList={fabricList}
          productList={productList}
        />

        <hr />

        <Sorts handleSortChange={handleSortChange} />
      </div>
      {console.log("render productlist")}
      <ProductListBedding productList={productList} />
    </div>
  );
}
