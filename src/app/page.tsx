import { TechStackSection, PersonalSection, ImageBlock } from "@/app/_ui/";
import styles from "./_styles/page.module.css";
import { ThemeSelect } from "@/features/theme/ui/theme-select/theme-select";

export default function Home() {
  return (
    <main className={styles.main}>
      <ThemeSelect />
      <div className={styles.sections}>
        <ImageBlock />
        <PersonalSection />
        <TechStackSection />
      </div>
    </main>
  );
}
