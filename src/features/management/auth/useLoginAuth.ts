import axiosInstance from "@/tools/axiosInstance";

export const login = async (data: any) => {
  try {
    const response = await axiosInstance.post("/auth", data);
    return response.data;
  } catch (error: any) {
    return error.response.data.message;
  }
};
