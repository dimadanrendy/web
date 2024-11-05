"use server";
import axiosInstance from "@/tools/axiosInstance";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export const deleteUsers = async (id: any) => {
  const token = cookies().get("X_ACCESS_TOKEN")?.value ?? "";
  const decodedToken = jwtDecode(token);
  const idUser = (decodedToken as { id: string })?.id || "";

  if (id === idUser) {
    return {
      message: "Tidak dapat menghapus diri sendiri",
    };
  }

  if (!token) {
    return false;
  }
  try {
    const response = await axiosInstance.delete(`/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
};
