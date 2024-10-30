"use server";
import axiosInstance from "@/tools/axiosInstance";
import { cookies } from "next/headers";

export const logout = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("X_ACCESS_TOKEN")?.value ?? "";
  if (!token) {
    return false;
  }

  try {
    await axiosInstance.delete(`/auth`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Credentials: "include",
      },
    });
    cookieStore.delete("X_ACCESS_TOKEN");
    cookieStore.delete("X_REFRESH_TOKEN");
    return true;
  } catch (error) {
    cookieStore.delete("X_ACCESS_TOKEN");
    cookieStore.delete("X_REFRESH_TOKEN");
    return true;
  }
};
