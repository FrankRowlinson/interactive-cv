import { BodyText, TitleText } from "@/shared/ui/typography";
import styles from "./personal-section.module.css";
import { motion } from "framer-motion";

type PersonalSectionProps = {};

export function PersonalSection({}: PersonalSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, x: 250 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className={styles.section}
    >
      <div className={styles.textBlock}>
        <TitleText variant='h3'>Vladislav Smolov</TitleText>
        <BodyText>Frontend Developer, 25 yo.</BodyText>
        <BodyText>Currently in Tbilisi, Georgia.</BodyText>
        <BodyText>
          Looking for opportunities remotely or with relocation.
        </BodyText>
        <BodyText>Curious, passionate, interested in new things.</BodyText>
        <BodyText>
          Love playing chess and video games, going outside, develop cool web
          apps.
        </BodyText>
      </div>
    </motion.section>
  );
}
