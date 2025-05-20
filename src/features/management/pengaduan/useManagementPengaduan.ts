"use server";
import axiosInstance from "@/tools/axiosInstance";
import { cookies } from "next/headers";

const getToken = () => {
  return cookies().get("X_ACCESS_TOKEN")?.value ?? "";
};

export const getAllPengaduan = async () => {
  const token = getToken();

  if (!token) {
    return false;
  }
  // get pengaduan
  try {
    const response = await axiosInstance.get(`/pengaduan/all`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
};

export const getPengaduanById = async (id: any) => {
  const token = getToken();

  if (!token) {
    return false;
  }
  try {
    const response = await axiosInstance.get(`/pengaduan/detail/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
};
