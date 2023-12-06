import { useSocialMediaLinks } from "./hooks/useSocialMediaLinks";
import SocialMedia from "./SocialMedia";
import styles from "./styles/socialMediaIcons.module.css";

export default function SocialMediaIcons() {
  const socialMediaLinks = useSocialMediaLinks();

  return (
    <div className={styles.container}>
      {socialMediaLinks.map((media, index) => (
        <div key={`${index}_${media.link}`} className={styles.media}>
        <SocialMedia {...media} />
        </div>
      ))}
    </div>
  );
}
