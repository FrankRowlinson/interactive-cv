import classNames from "classnames";
import { fonts } from "@/shared/lib";
import styles from "./title-text.module.css";

type TitleTextProps = {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3";
  className?: string;
};

export function TitleText({
  variant = "h1",
  className,
  children,
}: TitleTextProps) {
  const Component = variant;
  return (
    <Component
      className={classNames(
        fonts.pacifico.className,
        styles.text,
        styles[variant],
        className
      )}
    >
      {children}
    </Component>
  );
}
