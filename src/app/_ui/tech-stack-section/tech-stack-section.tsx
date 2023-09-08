import styles from "./tech-stack-section.module.css";
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
import { Section } from "@/shared/ui/section";
import Link from "next/link";

type TechStackSectionProps = {};

export function TechStackSection({}: TechStackSectionProps) {
  return (
    <Section className={styles.iconContainer} title='Tech stack'>
      <Link
        className={styles.cursorReset}
        target='_blank'
        href='https://youtu.be/dQw4w9WgXcQ?si=WflfqsWD-P6eRmNA'
      >
        <IconJS title='JavaScript' />
      </Link>
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
    </Section>
  );
}
