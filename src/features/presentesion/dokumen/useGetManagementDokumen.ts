"use server";
import axiosInstance from "@/tools/axiosInstance";

export const getDokumenBySlug = async (
  slug1: string,
  slug2?: string,
  slug3?: string
) => {
  try {
    let url = `/get/documents/by/${slug1}`;
    if (slug2) url += `/${slug2}`;
    if (slug3) url += `/${slug3}`;

    const response = await axiosInstance.get(url);

    return response.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data?.message;
  }
};
