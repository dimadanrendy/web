import axiosInstance from "@/tools/axiosInstance";
import axios from "axios";

export const login = async (data: any) => {
  try {
    const response = await axios.post(
      "https://bakeuda.pangkalpinangkota.go.id/api/v1/auth",
      data
    );
    return response.data;
  } catch (error: any) {
    return error.response.data.message;
  }
};
