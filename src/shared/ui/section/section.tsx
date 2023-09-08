"use client";

import { motion } from "framer-motion";
import styles from "./section.module.css";
import { TitleText } from "../typography";
import classNames from "classnames";

type SectionProps = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

export function Section({ children, title, className }: SectionProps) {
  return (
    <>
      {title && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className={styles.block}
        >
          <TitleText variant='h2'>{title}</TitleText>
        </motion.div>
      )}
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className={classNames(styles.section, className)}
      >
        {children}
      </motion.section>
    </>
  );
}
