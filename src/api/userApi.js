import axiosClient from "./axiosClient";
import axios from "axios";

const userApi = {
  register(data) {
    const url = "http://api.fakeshop-api.com/users/signup";
    return axios.post(url, data);
  },

  login(data) {
    const url = "http://api.fakeshop-api.com/users/signin";
    return axios.post(url, data);
  },
};

export default userApi;
