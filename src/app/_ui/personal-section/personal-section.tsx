import { BodyText, TitleText } from "@/shared/ui/typography";
import styles from "./personal-section.module.css";
import { Section } from "@/shared/ui/section";

type PersonalSectionProps = {};

export function PersonalSection({}: PersonalSectionProps) {
  return (
    <Section title='Who I am' className={styles.section}>
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
    </Section>
  );
}
