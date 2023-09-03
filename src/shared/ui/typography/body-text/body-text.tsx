import styles from "./body-text.module.css";
import classNames from "classnames";

type BodyTextProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function BodyText({
  children,
  variant = "primary",
  className,
}: BodyTextProps) {
  return (
    <p className={classNames(styles.text, styles[variant], className)}>
      {children}
    </p>
  );
}
