import React, { useRef, useState } from "react";
import "./Filters.scss";
import { countFabric, countSize } from "../countData";
import HandleClickOutside from "../HandleClickOutside";

export default function Filters(props) {
  const { fabricList, sizeList, colorList, productList } = props;

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
              {fabricList.map((item) => {
                return (
                  <li className="checkbox">
                    <input type="checkbox"></input>
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
                    <div style={{ backgroundColor: item.colorHexa }}></div>
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
                    <input type="checkbox"></input>
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
