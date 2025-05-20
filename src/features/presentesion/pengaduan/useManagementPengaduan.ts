import axiosInstance from "@/tools/axiosInstance";

export const postPengaduan = async (data: any) => {
  try {
    const response = await axiosInstance.post(`/pengaduan/baru`, data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const statusPengaduan = async (data: any) => {
  try {
    const response = await axiosInstance.get(`/pengaduan/status/` + data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GetAllpengaduan = async () => {
  try {
    const response = await axiosInstance.get(`/pengaduan/all`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
