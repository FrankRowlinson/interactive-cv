import { TitleText } from "@/shared/ui/typography";
import styles from "./tech-stack-section.module.css";
import { motion } from "framer-motion";
import {
  IconCSS3,
  IconExpress,
  IconHTML,
  IconJS,
  IconJest,
  IconMUI,
  IconMongo,
  IconMySQL,
  IconNext,
  IconNode,
  IconPython,
  IconReact,
  IconRedux,
  IconTS,
} from "@/app/assets/icons";

type TechStackSectionProps = {};

export function TechStackSection({}: TechStackSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -250 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className={styles.iconContainer}>
        <IconJS title='JavaScript' />
        <IconTS title='TypeScript' />
        <IconReact title='React' />
        <IconNext title='Next.js' />
        <IconRedux title='Redux' />
        <IconHTML title='HTML5' />
        <IconCSS3 title='CSS3' />
        <IconMUI title='Material UI' />
        <IconJest title='Jest' />
        <IconNode title='Node.js' />
        <IconExpress title='Express' />
        <IconMySQL title='MySQL' />
        <IconMongo title='MongoDB' />
        <IconPython title='Python' />
      </div>
    </motion.section>
  );
}
