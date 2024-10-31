"use server";
import axiosInstance from "@/tools/axiosInstance";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export const verifyToken = async () => {
  const token = cookies().get("X_ACCESS_TOKEN")?.value ?? "";
  const tokenRefresh = cookies().get("X_REFRESH_TOKEN")?.value ?? "";
  const decodedToken = jwtDecode(token);
  const id = (decodedToken as { id: string })?.id || "";

  if (!token || token === "") {
    return false;
  }

  if (!tokenRefresh || tokenRefresh === "") {
    return false;
  }

  // if (id || token) {
  //   const response = await axiosInstance.get(`/auth/${id}`, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   console.log(response.data);
  //   if (response.data.status === true) {
  //     return response.data;
  //   }

  //   if (
  //     response.data.status === false &&
  //     response.data.message === "jwt expired"
  //   ) {
  //     const response = await axiosInstance.patch(
  //       `/auth`,
  //       {},
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );

  //     cookies().set("X_ACCESS_TOKEN", response.data.access_token, {
  //       httpOnly: true,
  //       secure: process.env.NODE_ENV === "production",
  //       maxAge: 1000 * 60 * 60 * 2,
  //     });

  //     cookies().set("X_REFRESH_TOKEN", response.data.refresh_token, {
  //       httpOnly: true,
  //       secure: process.env.NODE_ENV === "production",
  //       maxAge: 1000 * 60 * 60 * 2,
  //     });
  //     return response.data;
  //   }

  //   if (
  //     response.data.status === false &&
  //     response.data.message === "jwt invalid"
  //   ) {
  //     await axiosInstance.delete(`/auth/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     return false;
  //   }
  // }

  try {
    const response = await axiosInstance.get(`/auth/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    if (error.response.data.message === "jwt expired") {
      const refreshToken = cookies().get("X_REFRESH_TOKEN")?.value ?? "";
      if (!refreshToken) {
        return false;
      }

      const response = await axiosInstance.patch(
        `/auth`,
        {},
        {
          headers: { Authorization: `Bearer ${refreshToken}` },
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
    } else {
      if (tokenRefresh === "") {
        cookies().delete("X_REFRESH_TOKEN");
        cookies().delete("X_ACCESS_TOKEN");
        return false;
      }
      const response = await axiosInstance.delete(`/auth`, {
        headers: {
          Authorization: `Bearer ${tokenRefresh}`,
        },
      });

      console.log(response.data);
      return false;
    }
  }
};
