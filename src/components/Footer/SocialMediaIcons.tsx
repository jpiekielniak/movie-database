import React from "react";
import { useSocialMediaLinks } from "./hooks/useSocialMediaLinks";
import SocialMedia from "./SocialMedia";
import styles from "./styles/socialMediaIcons.module.css";

const SocialMediaIcons: React.FC = React.memo(() =>  {
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
});

export default SocialMediaIcons;
