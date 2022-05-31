import React from "react";
import PropType from "prop-types";
import "./Sorts.scss";

// Sorts.PropType = {
//   currentSort: PropType.string.isRequired,
//   onChange: PropType.func,
// };

export default function Sorts({ handleSortChange }) {
  return (
    <div className="product__countAndSort">
      {/* count */}
      <span className="product__count">
        {" "}
        <span>45</span> products
      </span>

      {/* product sort */}
      <div className="product__sort">
        <div className="product__sort-item">
          <label>Show</label>
          <select>
            <option>12</option>
            <option>24</option>
            <option>48</option>
          </select>
        </div>

        <div className="product__sort-item">
          <label>Sort by</label>
          <select
            onChange={(e) => {
              handleSortChange(e.target.value);
              console.log("click sort", e.target.value);
            }}
          >
            <option value="productName&_order=asc">Alphabetically A-Z</option>
            <option value="price&_order=asc">Price, low to high</option>
            <option value="price&_order=desc">Price, high to low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
