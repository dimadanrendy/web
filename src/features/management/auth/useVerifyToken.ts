"use server";
import axiosInstance from "@/tools/axiosInstance";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export const verifyToken = async () => {
  const token = cookies().get("X_ACCESS_TOKEN")?.value ?? "";
  const tokenRefresh = cookies().get("X_REFRESH_TOKEN")?.value ?? "";
  if (!token || token === "") {
    return false;
  }
  const decodedToken = jwtDecode(token);
  const id = (decodedToken as { id: string })?.id || "";

  if (!token || token === "") {
    return false;
  }

  if (!tokenRefresh || tokenRefresh === "") {
    return false;
  }

  try {
    const response = await axiosInstance.get(`/auth/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data.message === "jwt expired") {
      try {
        const response = await axiosInstance.patch(
          `/auth`,
          {},
          {
            headers: { Authorization: `Bearer ${tokenRefresh}` },
          }
        );

        cookies().set("X_ACCESS_TOKEN", response.data.access_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 1000 * 60 * 60 * 2,
        });

        cookies().set("X_REFRESH_TOKEN", response.data.refresh_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 1000 * 60 * 60 * 2,
        });
        return response.data;
      } catch {
        return false;
      }
    } else {
      if (tokenRefresh === "") {
        cookies().delete("X_REFRESH_TOKEN");
        cookies().delete("X_ACCESS_TOKEN");
        return false;
      }
      try {
        await axiosInstance.delete(`/auth`, {
          headers: {
            Authorization: `Bearer ${tokenRefresh}`,
          },
        });
        return false;
      } catch (error) {
        cookies().delete("X_REFRESH_TOKEN");
        cookies().delete("X_ACCESS_TOKEN");
        return false;
      }
    }
  }
};
