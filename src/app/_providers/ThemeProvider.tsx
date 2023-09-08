"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/entities/theme";

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const { theme, gradient } = useThemeStore();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.gradient = gradient;
  }, [gradient]);

  return <>{children}</>;
}
