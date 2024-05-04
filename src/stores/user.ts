import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserState {
  user: {
    id: number;
    name: string;
    age: number;
  };
  setUser: (user: { id: number; name: string; age: number }) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: {} as UserState["user"],
      setUser: (user) => set({ user }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
