import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ThemeState } from "../model/types";

const initialState: Pick<ThemeState, "theme" | "gradient"> = {
  theme: "light",
  gradient: "linear",
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      ...initialState,

      switchTheme: (theme) => set((state) => ({ ...state, theme })),
      toggleGradient: () =>
        set((state) => ({
          ...state,
          gradient: state.gradient === "linear" ? "radial" : "linear",
        })),
    }),
    { name: "theme-storage" }
  )
);
