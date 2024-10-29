import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    bidang: string;
    username: string;
    image: string;
  } | null;
  setUser: (user: any | null) => void;
};

export const useUser = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,

      setUser: (user: any) => {
        set({ user: user });
      },

      // logout dan hapus local storage
      deleteUser: () => {
        // hapus local storage
        set({ user: null });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
