import { TitleText } from "@/shared/ui/typography";
import styles from "./title-block.module.css";
import { motion } from "framer-motion";

type TitleBlockProps = {
  children: React.ReactNode;
};

export function TitleBlock({ children }: TitleBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={styles.block}
      viewport={{ once: true }}
    >
      <TitleText variant='h2'>{children}</TitleText>
    </motion.div>
  );
}
