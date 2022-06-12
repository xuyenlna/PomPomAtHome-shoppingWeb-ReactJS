import React, { useRef, useState } from "react";
import "./Filters.scss";
import { countFabric, countSize } from "../countData";
import HandleClickOutside from "../HandleClickOutside";

export default function FiltersForBedding(props) {
  const {
    fabricList,
    sizeList,
    colorList,
    productList,
    handleFilterFabric,
    handleFilterColor,
    handleFilterSize,
  } = props;

  /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  const ref1 = useRef(null);
  const [isOpenFabric, setIsOpenFabric] = useState(false);
  const togglingFabric = () => setIsOpenFabric(!isOpenFabric);
  HandleClickOutside(ref1, () => setIsOpenFabric(false));

  const ref2 = useRef(null);
  const [isOpenColor, setIsOpenColor] = useState(false);
  const togglingColor = () => setIsOpenColor(!isOpenColor);
  HandleClickOutside(ref2, () => setIsOpenColor(false));

  const ref3 = useRef(null);
  const [isOpenSize, setIsOpenSize] = useState(false);
  const togglingSize = () => setIsOpenSize(!isOpenSize);
  HandleClickOutside(ref3, () => setIsOpenSize(false));

  //handle filter fabric
  const handleFabricSelect = (e) => {
    console.log(e.target.value);
    handleFilterFabric(e.target.value);
  };

  // handle filter color
  const handleColorSelect = (e) => {
    const color = e.target.className;
    handleFilterColor(color);
  };

  // handle filter size
  const handleSizeSelect = (e) => {
    const size = e.target.value;
    handleFilterSize(size);
  };

  return (
    <div className="product__filters">
      {/* fabric */}
      <div className="product__filters-item" ref={ref1}>
        <button onClick={togglingFabric} className="dropdown-btn">
          <span>FABRIC</span>
          <i className="fa fa-angle-down"></i>
        </button>

        {isOpenFabric && (
          <div className="dropdown__content-fabric">
            <ul>
              {fabricList.map((item, index) => {
                return (
                  <li className="checkbox" key={index}>
                    <input
                      type="checkbox"
                      onChange={handleFabricSelect}
                      value={item}
                    ></input>
                    <span>{item.toUpperCase()}</span>
                    <span>({countFabric(productList, item)})</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* color */}
      <div className="product__filters-item" ref={ref2}>
        <button onClick={togglingColor} className="dropdown-btn">
          <span>COLOR</span>
          <i className="fa fa-angle-down"></i>
        </button>

        {isOpenColor && (
          <div className="dropdown__content-color">
            <ul>
              {colorList.map((item) => {
                return (
                  <li>
                    <div
                      onClick={handleColorSelect}
                      className={item.colorName}
                      style={{ backgroundColor: item.colorHexa }}
                      type="checkbox"
                    ></div>
                    <span>{item.colorName.toUpperCase()}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* size */}
      <div className="product__filters-item" ref={ref3}>
        <button onClick={togglingSize} className="dropdown-btn">
          <span>SIZE</span>
          <i className="fa fa-angle-down"></i>
        </button>

        {isOpenSize && (
          <div className="dropdown__content-size">
            <ul>
              {sizeList.map((item) => {
                return (
                  <li>
                    <input
                      type="checkbox"
                      onChange={handleSizeSelect}
                      value={item}
                    ></input>
                    <span>{item.toUpperCase()}</span>
                    <span>({countSize(productList, item)})</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
