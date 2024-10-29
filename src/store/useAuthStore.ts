import axiosInstance from "@/tools/axiosInstance";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { StorageValue } from "zustand/middleware";

// Tipe untuk AuthState
type AuthState = {
  isLogin: boolean;
  isLoading: boolean;
  error: string | null;
  login: (input: string, password: string) => Promise<void>;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    bidang: string;
    username: string;
    image: string;
  } | null;
  accessToken: string | null; // Token akses
  refreshToken: string | null; // Token refresh
  newRefreshToken: () => Promise<void>;
  logout: () => void; // Fungsi untuk logout
  initializeAuth: () => void; // Fungsi untuk inisialisasi auth dari localStorage
};

const localStorageAdapter = {
  getItem: (key: string): StorageValue<AuthState> | null => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  setItem: (key: string, value: StorageValue<AuthState>) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
};

// Membuat store Zustand dengan persist middleware
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isLogin: false,
      user: null,
      accessToken: null,
      refreshToken: null,
      isLoading: false,
      error: null,

      // set user
      setUser: (user: any) => {
        set({ user: user });
      },

      login: async (input: string, password: string) => {
        set({ isLoading: true, error: null }); // Start loading
        try {
          const response = await axiosInstance.post("/auth", {
            input,
            password,
          });

          const { access_token, refresh_token, user } = response.data;

          set({
            isLogin: true,
            user: user,
            accessToken: access_token,
            refreshToken: refresh_token,
          });
        } catch (error: any) {
          set({ error: error.response?.data?.message || "Login failed" });
        } finally {
          set({ isLoading: false }); // Stop loading
        }
      },

      newRefreshToken: async () => {
        set({ isLoading: true }); // Start loading
        try {
          const { user, refreshToken }: any = get();
          const response = await axiosInstance.patch(
            `/auth/${user.id}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            }
          );

          if (response.data.status == false) {
            set({
              accessToken: null,
              refreshToken: null,
              user: null,
              isLogin: false,
            });
          }

          const { access_token, refresh_token } = response.data;

          set({
            isLogin: true,
            accessToken: access_token,
            refreshToken: refresh_token,
          });
        } catch (error: any) {
          set({ error: error.response?.data?.message || "Refresh failed" });
        } finally {
          set({ isLoading: false }); // Stop loading
        }
      },

      // Fungsi untuk logout, membersihkan token
      logout: async () => {
        set({ isLoading: true, error: null }); // Start loading
        try {
          const { accessToken, user }: any = get();
          await axiosInstance.delete(`/auth/${user.id}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          set({
            accessToken: null,
            refreshToken: null,
            user: null,
            isLogin: false,
          });
        } catch (error: any) {
          set({ error: error.response?.data?.message || "Logout failed" });
        } finally {
          set({ isLoading: false }); // Stop loading
        }
      },

      // Fungsi untuk inisialisasi auth dari localStorage
      initializeAuth: () => {
        const { accessToken, refreshToken, user } = get();

        // Jika accessToken, refreshToken, atau user masih kosong, set isLoading jadi true
        if (!accessToken || !refreshToken || !user) {
          set({ isLoading: true });

          const storedAuth = localStorageAdapter.getItem("auth-storage");

          if (storedAuth?.state) {
            set({
              accessToken: storedAuth.state.accessToken,
              refreshToken: storedAuth.state.refreshToken,
              user: storedAuth.state.user,
              isLogin: !!storedAuth.state.accessToken,
            });
          }

          set({ isLoading: false });
        }
      },
    }),

    {
      name: "auth-storage", // Nama penyimpanan di localStorage
      storage: localStorageAdapter, // Penyimpanan yang digunakan (localStorage)
    }
  )
);
