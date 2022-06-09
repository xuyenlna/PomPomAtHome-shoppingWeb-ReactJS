import React from "react";
import "./FiltersViewer.scss";

export default function FiltersViewer({ queryParams, onChange }) {
  const handleRemoveFilter = (type) => {
    const newParams = { ...queryParams };
    delete newParams[type];
    onChange(newParams);
  };

  const handleClearAll = () => {
    let newParams = { ...queryParams };
    delete newParams.colorName;
    delete newParams.fabric;
    delete newParams.q;
    onChange(newParams);
  };

  let list = [
    { type: "fabric", name: queryParams.fabric },
    { type: "colorName", name: queryParams.colorName },
    { type: "q", name: queryParams.q },
  ];
  let countUndefinedParams = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === undefined) {
      countUndefinedParams = countUndefinedParams + 1;
    }
  }
  return (
    <>
      {(queryParams.fabric !== undefined ||
        queryParams.colorName !== undefined ||
        queryParams.q !== undefined) && (
        <div className="filtersViewer">
          <ul>
            <li className="clearAll" onClick={handleClearAll}>
              <a>CLEAR ALL</a>
            </li>
            {list
              .filter((x) => x.name !== undefined)
              .map((x, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      handleRemoveFilter(x.type);
                    }}
                  >
                    <a>
                      <span>{x.name}</span>
                      <i class="fa fa-times"></i>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </>
  );
}
