"use server";
import axiosInstance from "@/tools/axiosInstance";
import { cookies } from "next/headers";

export const logout = async () => {
  const token = cookies().get("X_ACCESS_TOKEN")?.value ?? "";
  if (!token) {
    return false;
  }

  try {
    await axiosInstance.delete(`/auth`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    cookies().delete("X_ACCESS_TOKEN");
    cookies().delete("X_REFRESH_TOKEN");
    return true;
  } catch (error) {
    cookies().delete("X_ACCESS_TOKEN");
    cookies().delete("X_REFRESH_TOKEN");
    return true;
  }
};
