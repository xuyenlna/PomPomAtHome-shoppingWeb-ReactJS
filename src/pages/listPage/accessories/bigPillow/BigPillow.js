import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import "./BigPillow.scss";
import productApi from "../../../../api/productsApi";
import Sorts from "../../component/Sorts/Sorts";
import { CATEGORIES } from "../../../../utility/constants";
import {
  getColorAndHexaList,
  getFabricList,
  getSizeList,
} from "../../component/filterData";
import ProductListAccessories from "../../component/ProductList/ProductListAccessories";
import Filters from "../../component/Filters/Filters";
import FiltersViewer from "../../component/FiltersViewer/FiltersViewer";
import Loading from "../../../../components/Loading/Loading";

export default function Duets() {
  const categoryName = CATEGORIES.BIG_PILLOW;

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      categoryName: params.categoryName || categoryName,
      _sort: params._sort || "productName",
      _order: params._order || "asc",
      // isPromotion: params.isPromotion === "true", // inCase the value filter is boolean
    };
  }, [location.search]);

  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  // const [filters, setFilters] = useState({
  //   categoryName: categoryName,
  //   _sort: "productName",
  //   _order: "asc",
  // });

  // get Data of all DuetCollection, filter color list, size list and fabric list
  useEffect(() => {
    (async () => {
      try {
        const data = await productApi.getAll(queryParams);
        setProductList(data);
      } catch (error) {
        console.log("fail to fetch data");
      }

      setLoading(false);
    })();
  }, [queryParams]);

  let colorList = getColorAndHexaList(productList);
  let sizeList = getSizeList(productList);
  let fabricList = getFabricList(productList);

  //handle sort change
  const handleSortChange = (newSortType, newSortOrder) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   _sort: newSortType,
    //   _order: newSortOrder,
    // }));

    const filters = {
      ...queryParams,
      _sort: newSortType,
      _order: newSortOrder,
    };

    navigate({
      pathName: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleFilterFabric = (fabric) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   fabric: fabric,
    // }));

    const filters = {
      ...queryParams,
      fabric: fabric,
    };

    navigate({
      pathName: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleFilterColor = (color) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   q: color,
    // }));

    const filters = {
      ...queryParams,
      q: color,
    };

    navigate({
      pathName: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleFilterSize = (size) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   q: size,
    // }));

    const filters = {
      ...queryParams,
      q: size,
    };

    navigate({
      pathName: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const setNewFilters = (newFilters) => {
    navigate({
      pathName: location.pathname,
      search: queryString.stringify(newFilters),
    });
  };

  if (loading) {
    return <Loading />;
  }

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
        <FiltersViewer queryParams={queryParams} onChange={setNewFilters} />

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
