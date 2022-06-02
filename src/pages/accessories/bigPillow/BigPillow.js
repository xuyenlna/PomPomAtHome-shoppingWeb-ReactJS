import React, { useEffect, useState } from "react";
import "./BigPillow.scss";
import productApi from "../../../api/productsApi";
import Sorts from "../../../components/Sorts/Sorts";
import { CATEGORIES } from "../../../utility/constants";
import {
  getColorAndHexaList,
  getFabricList,
  getSizeList,
} from "../../../components/filterData";
import ProductListAccessories from "../../../components/ProductList/ProductListAccessories";
import Filters from "../../../components/Filters/Filters";

export default function Duets() {
  const categoryName = CATEGORIES.BIG_PILLOW;
  const [productList, setProductList] = useState([]);
  let [filters, setFilters] = useState({
    categoryName: categoryName,
    _sort: "productName",
    _order: "asc",
  });

  // get Data of all DuetCollection, filter color list, size list and fabric list
  useEffect(() => {
    (async () => {
      try {
        console.log("filter API", filters);
        const data = await productApi.getAll(filters);
        setProductList(data);
        console.log("callAPI data", data);
      } catch (error) {
        console.log("fail to fetch data");
      }

      // setLoading(false)
    })();
  }, [filters]);

  let colorList = getColorAndHexaList(productList);
  let sizeList = getSizeList(productList);
  let fabricList = getFabricList(productList);

  const handleSortChange = (newSortType, newSortOrder) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: newSortType,
      _order: newSortOrder,
    }));
  };

  const handleFilterFabric = (fabric) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      fabric: fabric,
    }));
  };

  const handleFilterColor = (color) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      q: color,
    }));
  };

  const handleFilterSize = (size) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      q: size,
    }));
  };
  return (
    <div className="product-collection">
      <div className="product-general">
        <h1 className="product-title">PIG PILLOWS</h1>

        <Filters
          colorList={colorList}
          sizeList={sizeList}
          fabricList={fabricList}
          productList={productList}
          handleFilterFabric={handleFilterFabric}
          handleFilterColor={handleFilterColor}
          handleFilterSize={handleFilterSize}
        />

        <hr />
        <div className="product__countAndSort">
          {/* count */}
          <span className="product__count">
            {" "}
            <span>{productList.length}</span> products
          </span>

          {/* sort */}
          <Sorts
            productList={productList}
            handleSortChange={handleSortChange}
          />
        </div>
      </div>
      <ProductListAccessories productList={productList} />
    </div>
  );
}
