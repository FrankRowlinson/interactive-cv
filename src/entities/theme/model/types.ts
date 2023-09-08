export type Gradient = "radial" | "linear";

export type Theme = "light" | "dark" | "neon";

export type ThemeState = {
  theme: Theme;
  gradient: Gradient;

  switchTheme: (theme: Theme) => void;
  toggleGradient: () => void;
};
