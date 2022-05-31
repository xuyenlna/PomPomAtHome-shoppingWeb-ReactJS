import axiosClient from "./axiosClient";

const productApi = {
  getAll(params) {
    const url = "/products";
    return axiosClient.get(url, { params: params });
  },

  get(id) {
    const url = `/products?productName=coverlet/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = "/products?productName=coverlet";
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/products?productName=coverlet/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/products?productName=coverlet/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
