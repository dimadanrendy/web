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
    cookies().set("X_ACCESS_TOKEN", "", { expires: new Date(0) });
    cookies().set("X_REFRESH_TOKEN", "", { expires: new Date(0) });
    return true;
  } catch (error) {
    cookies().set("X_ACCESS_TOKEN", "", { expires: new Date(0) });
    cookies().set("X_REFRESH_TOKEN", "", { expires: new Date(0) });
    return true;
  }
};
