"use client";

import { ThemeProvider } from "./ThemeProvider";

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
