import axiosInstance from "@/tools/axiosInstance";

export const login = async (data: any) => {
  try {
    const response = await axiosInstance.post("/auth", data);
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response.data.message;
  }
};
