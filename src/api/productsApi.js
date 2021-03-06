import axiosClient from "./axiosClient";

const productApi = {
  getAll(params) {
    const url = "/products";
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = "/products";
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },

  filterByProductName(name) {
    const url = `/products?productName=${name}`;
    return axiosClient.get(url);
  },

  filterByCategoryName(name) {
    const url = `/products?categoryName=${name}`;
    return axiosClient.get(url);
  },
  filterByOnSale(params) {
    const url = `/products?onSale=true`;
    return axiosClient.get(url, { params });
  },
};

export default productApi;
