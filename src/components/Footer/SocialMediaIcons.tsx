import { useSocialMediaLinks } from "./hooks/useSocialMediaLinks";
import SocialMedia from "./SocialMedia";

export default function SocialMediaIcons() {
  const socialMediaLinks = useSocialMediaLinks();

  return (
    <div style={{display: 'flex'}}>
      {socialMediaLinks.map((media, index) => (
        <div key={`${index}_${media.link}`} style={{ marginRight: '10px' }}>
        <SocialMedia {...media} />
        </div>
      ))}
    </div>
  );
}
