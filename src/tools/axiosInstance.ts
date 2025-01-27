import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "x-secret-key": `${process.env.NEXT_PRIVATE_SECRET_KEY}`,
  },
});

export default axiosInstance;
