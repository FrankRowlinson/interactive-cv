import { TechStackSection, PersonalSection, ImageBlock } from "@/app/_ui/";
import styles from "./_styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageBlock />
      <PersonalSection />
      <TechStackSection />
    </main>
  );
}
