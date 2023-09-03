"use client";

import { TechStackSection, TitleBlock } from "@/app/_ui/";
import styles from "./_styles/page.module.css";
import { PersonalSection } from "./_ui/personal-section/personal-section";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sections}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.imageBlock}
        >
          <Image
            src='/photo-4k.webp'
            width={200}
            height={240}
            className={styles.image}
            alt='Personal photo of Vladislav Smolov'
          />
        </motion.div>
        <TitleBlock>Who I am</TitleBlock>
        <PersonalSection />
        <TitleBlock>Tech stack</TitleBlock>
        <TechStackSection />
      </div>
    </main>
  );
}
