export const countFabric = (list, type) => {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].fabric === type) {
      count += list[i].colorList.length;
    }
  }
  return count;
};
export const countSize = (list, type) => {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].size.find((size) => size === type)) {
      count += list[i].colorList.length;
    }
  }
  return count;
};
