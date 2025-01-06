export interface GetData {
  title: string;
  description: string;
  image: string;
  url: string;
}

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  judul: string;
  tanggal: string;
};

// Definisikan tipe untuk kredensial login
export interface LoginCredentials {
  username: string;
  password: string;
}

// Definisikan tipe untuk data pengguna saat signup
export interface SignupData {
  username: string;
  password: string;
  email: string;
  // Tambahkan field lain jika diperlukan
}

// Definisikan tipe untuk respons login dan signup
export interface AuthResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
    // Tambahkan properti lain yang diperlukan
  };
}

// src/types/authTypes.ts

export interface UserProfile {
  id: string; // ID unik untuk pengguna
  name: string; // Nama lengkap
  username: string; // Nama pengguna
  email: string; // Alamat email pengguna
  firstName?: string; // Nama depan (opsional, jika aplikasi Anda menggunakannya)
  lastName?: string; // Nama belakang (opsional)
  role?: string; // Peran pengguna dalam sistem (admin, user, dll.)
  createdAt?: string; // Tanggal pembuatan akun (opsional)
  updatedAt?: string; // Tanggal terakhir kali akun diperbarui (opsional)
  avatarUrl?: string; // URL gambar avatar pengguna (opsional)
}

export interface Data {
  status_code: number;
  status: boolean;
  message: string;
  data: Person[];
}

export interface Pegawai {
  id_pegawai: string;
  name: String;
  jabatan: String;
  nip: String;
  golongan: String;
  pendidikan_terahir: String;
  email: String;
  bidang: String;
  status: String;
  image: any;
  createdAt: string;
  updatedAt: string;
}

export interface Person {
  id_users: string;
  email: string;
  name: string;
  username: string;
  role: string;
  bidang: string;
  status: boolean;
  image: any;
  createdAt: string;
  updatedAt: string;
}

export interface IDocuments {
  id_documents: string;
  nomor: String;
  judul: String;
  tipe_dokumen: String;
  dokumen: String;
  bidang: String;
  singkatan: String;
  tahun: String;
  bahasa: String;
  tempat_penetapan: String;
  sumber: String;
  lokasi: String;
  file: any;
  published: Boolean;
  createdAt: string;
  updatedAt: string;
  // authorId  String?
  authorUsername: String;
  // createdAt DateTime @default(now())
  // updatedAt DateTime @updatedAt
}

export interface LoginResponse {
  status_code: number;
  status: boolean;
  message: string;
  user: UserProfile;
  access_token: string;
}

export interface RefreshTokenResponse {
  status_code: number;
  status: boolean;
  message: string;
  access_token: string;
}
