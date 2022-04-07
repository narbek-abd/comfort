import axios from "axios";
import Cookies from "js-cookie";

const axiosClient = axios.create({
  baseURL: `http://localhost:8000/api`,
  withCredentials: true,
});

export const webAxiosClient = axios.create({
  baseURL: `http://localhost:8000/`,
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => {
    const authToken = Cookies.get("auth-token");

    if (authToken) {
      config.headers.authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;
