export const getColorList = (data) => {
  let colorData = [];
  for (let i = 0; i < data.length; i++) {
    let childColorList = data[i].colorList;
    for (let i = 0; i < childColorList.length; i++) {
      colorData.push(childColorList[i].colorName);
    }
  }
  colorData = colorData.filter(
    (item, index, array) => array.indexOf(item) === index
  );
  return colorData;
};

export const getColorAndHexaList = (data) => {
  let colorData = [];
  for (let i = 0; i < data.length; i++) {
    let childColorList = data[i].colorList;
    for (let i = 0; i < childColorList.length; i++) {
      colorData.push({
        colorName: childColorList[i].colorName,
        colorHexa: childColorList[i].colorHexa,
      });
    }
  }
  colorData = colorData.filter(
    (item, index, array) => array.indexOf(item) === index
  );
  return colorData;
};

export const getSizeList = (data) => {
  let sizeData = [];
  for (let i = 0; i < data.length; i++) {
    let childCList = data[i].size;
    for (let i = 0; i < childCList.length; i++) {
      sizeData.push(childCList[i]);
    }
  }
  sizeData = sizeData.filter(
    (item, index, array) => array.indexOf(item) === index
  );
  return sizeData;
};

export const getFabricList = (data) => {
  let fabricData = [];
  for (let i = 0; i < data.length; i++) {
    fabricData.push(data[i].fabric);
  }
  fabricData = fabricData.filter(
    (item, index, array) => array.indexOf(item) === index
  );
  return fabricData;
};
