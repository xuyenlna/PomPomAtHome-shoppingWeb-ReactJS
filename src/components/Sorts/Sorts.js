import React from "react";
import "./Sorts.scss";

export default function Sorts({ productList, handleSortChange }) {
  const handleChange = (e) => {
    let value = e.target.value;
    let index = value.indexOf(":");
    if (!index) return;
    let sortType = value.slice(0, index);
    let order = value.slice(index + 1, value.length);
    handleSortChange(sortType, order);
  };
  return (
    <div className="product__sort">
      {/* <div className="product__sort-item">
          <label>Show</label>
          <select>
            <option>12</option>
            <option>24</option>
            <option>48</option>
          </select>
        </div> */}

      <div className="product__sort-item">
        <label>Sort by</label>
        <select onChange={handleChange}>
          <option value="productName:asc">Alphabetically A-Z</option>
          <option value="price:asc">Price, low to high</option>
          <option value="price:desc">Price, high to low</option>
        </select>
      </div>
    </div>
  );
}
