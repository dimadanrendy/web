"use server";
import axiosInstance from "@/tools/axiosInstance";
import { cookies } from "next/headers";

const getToken = () => {
  return cookies().get("X_ACCESS_TOKEN")?.value ?? "";
};

export const postPegawai = async (data: any) => {
  const token = getToken();

  if (!token) {
    return false;
  }
  try {
    const response = await axiosInstance.post(`/pegawai`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
};

export const getPegawai = async (slug?: String) => {
  const token = getToken();

  if (!slug) {
    return false;
  }

  if (!token) {
    return false;
  }
  try {
    let endpoint = "/pegawai"; // Default endpoint

    // Logika berdasarkan slug
    if (slug === "pejabat-eselon") {
      endpoint = `/pegawai/by/pejabat-eselon`; // Endpoint khusus pejabat-eselon
    } else if (slug === "staf-pns") {
      endpoint = `/pegawai/by/pns`; // Endpoint khusus staf-pns
    } else if (slug === "staf-pppk") {
      endpoint = `/pegawai/by/pppk`; // Endpoint khusus staf-pppk
    } else if (slug === "phl-sekretariat") {
      endpoint = `/pegawai/by/phl/Sekretariat`; // Endpoint khusus phl-sekretariat
    } else if (slug === "phl-perbendaharaan") {
      endpoint = `/pegawai/by/phl/Perbendaharaan`; // Endpoint khusus phl-perbendaharaan
    } else if (slug === "phl-aset") {
      endpoint = `/pegawai/by/phl/Aset`; // Endpoint khusus phl-aset
    } else if (slug === "phl-akuntansi") {
      endpoint = `/pegawai/by/phl/Akuntansi`; // Endpoint khusus phl-akuntansi
    } else if (slug === "phl-anggaran") {
      endpoint = `/pegawai/by/phl/Anggaran`; // Endpoint khusus phl-anggaran
    } else if (slug === "phl-pendaftaran") {
      endpoint = `/pegawai/by/phl/Pendaftaran`; // Endpoint khusus phl-pendaftaran
    } else if (slug === "phl-penagihan") {
      endpoint = `/pegawai/by/phl/Penagihan`; // Endpoint khusus phl-penagihan
    }
    const response = await axiosInstance.get(endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
};

export const deletePegawai = async (id: string) => {
  const token = getToken();

  if (!token) {
    return false;
  }
  try {
    const response = await axiosInstance.delete(`/pegawai/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
};
