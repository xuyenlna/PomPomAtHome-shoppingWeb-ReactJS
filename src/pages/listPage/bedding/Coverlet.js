import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import "../listPages.scss";
import productApi from "../../../api/productsApi";
import Filters from "../../listPage/component/Filters/Filters";
import Sorts from "../../listPage/component/Sorts/Sorts";
import { CATEGORIES } from "../../../utility/constants";
import {
  getColorAndHexaList,
  getFabricList,
  getSizeList,
} from "../../listPage/component/filterData";
import ProductList from "../component/ProductList/ProductList";
import FiltersViewer from "../component/FiltersViewer/FiltersViewer";
import Loading from "../../../components/Loading/Loading";
import BackToTop from "../../../components/BackToTop/BackToTop";

export default function Coverlet() {
  const categoryName = CATEGORIES.COVERLET;

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      categoryName: params.categoryName || categoryName,
      _sort: params._sort || "productName",
      _order: params._order || "asc",
    };
  }, [location.search]);

  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

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

  // handle sort
  const handleSortChange = (newSortType, newSortOrder) => {
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

  // handle filter
  const handleFilterFabric = (fabric) => {
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
    const filters = {
      ...queryParams,
      colorName: color,
    };

    navigate({
      pathName: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleFilterSize = (size) => {
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
    <>
      <div className="product-collection">
        <div className="product-general">
          <h1 className="product-title">COVERLETS & BLANKETS</h1>

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
        <ProductList productList={productList} />
      </div>
      <BackToTop />
    </>
  );
}
