import { ThemeSelect } from "@/features/theme/ui/theme-select/theme-select";
import styles from "./options-bar.module.css";

type Props = {};

export function OptionsBar({}: Props) {
  return (
    <div className={styles.optionsBar}>
      <ThemeSelect />
    </div>
  );
}
