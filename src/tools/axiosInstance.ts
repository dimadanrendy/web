import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_API_URL,
  withCredentials: true,
  headers: {
    "x-secret-key": `${process.env.PRIVATE_KEY}`,
  },
});

export default axiosInstance;
