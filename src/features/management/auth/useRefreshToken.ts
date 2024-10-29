"use server";
import axiosInstance from "@/tools/axiosInstance";
import { cookies } from "next/headers";

export const refreshToken = async () => {
  const token = cookies().get("X_REFRESH_TOKEN")?.value ?? "";
  if (!token || token === "") {
    return false;
  }
  try {
    const response = await axiosInstance.patch(
      `/auth`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.access_token; // Mengembalikan token yang baru
  } catch (error) {
    return false; // Kembalikan null jika refresh gagal
  }
};
