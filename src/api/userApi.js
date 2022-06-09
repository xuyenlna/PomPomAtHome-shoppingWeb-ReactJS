import axiosClient from "./axiosClient";

const userApi = {
  register(data) {
    const url = "/post/register";
    return axiosClient.post(url, data);
  },
};

export default userApi;
