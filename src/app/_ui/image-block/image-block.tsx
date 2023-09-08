"use client";

import Image from "next/image";
import styles from "./image-block.module.css";
import { motion } from "framer-motion";
import { useThemeStore } from "@/entities/theme";

export function ImageBlock() {
  const { toggleGradient } = useThemeStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut" }}
      className={styles.imageBlock}
    >
      <Image
        src='/photo-4k.webp'
        width={200}
        height={240}
        className={styles.image}
        alt='Personal photo of Vladislav Smolov'
        onClick={() => toggleGradient()}
        title='Switch between 2 gradients'
      />
    </motion.div>
  );
}
