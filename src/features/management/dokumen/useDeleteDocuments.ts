"use server";
import axiosInstance from "@/tools/axiosInstance";
import { cookies } from "next/headers";

export const deleteDocuments = async (id: any) => {
  const token = cookies().get("X_ACCESS_TOKEN")?.value ?? "";
  if (!token) {
    return false;
  }
  try {
    const response = await axiosInstance.delete(`/documents/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
};
