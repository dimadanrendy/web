"use server";
import axiosInstance from "@/tools/axiosInstance";
import { cookies } from "next/headers";

export const postDocuments = async (data: any) => {
  const token = cookies().get("X_ACCESS_TOKEN")?.value ?? "";

  if (!token) {
    return false;
  }
  try {
    const response = await axiosInstance.post(`/documents`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
};