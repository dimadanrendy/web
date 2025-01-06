import axiosInstance from "@/tools/axiosInstance";

export const getPegawaiByQuery = async (slug1: string) => {
  try {
    // Tentukan endpoint berdasarkan apakah slug2 kosong atau tidak
    const endpoint = `/get/pegawai/by/${slug1}`;

    const response = await axiosInstance.get(endpoint);

    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
};

export const getPegawaiPhl = async (slug1: string, slug2?: string) => {
  try {
    // Tentukan endpoint berdasarkan apakah slug2 kosong atau tidak
    const endpoint = `/get/pegawai/by/${slug1}/${slug2}`;

    const response = await axiosInstance.get(endpoint);

    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
};
