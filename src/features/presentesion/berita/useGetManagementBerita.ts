"use server";
import axiosInstance from "@/tools/axiosInstance";
import { cookies } from "next/headers";

const getToken = () => {
  return cookies().get("X_ACCESS_TOKEN")?.value ?? "";
};

export const getBeritaByTipe = async (
  slug: String,
  page: number,
  pageSize: number
) => {
  try {
    const response = await axiosInstance.get(
      `/get/by/${slug}?page=${page}&pageSize=${pageSize}`
    );

    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
};

export const getBeritaById = async (slug: String) => {
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
