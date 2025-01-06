"use server";
import axiosInstance from "@/tools/axiosInstance";
import { cookies } from "next/headers";

const getToken = () => {
  return cookies().get("X_ACCESS_TOKEN")?.value ?? "";
};

export const getBeritaByTipe = async (slug: String) => {
  const token = getToken();

  if (!token) {
    return false;
  }
  try {
    const response = await axiosInstance.get(`/photos/by/${slug}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
};

export const postBerita = async (data: any) => {
  const token = getToken();

  if (!token) {
    return false;
  }
  try {
    const response = await axiosInstance.post(`/photos`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
};
