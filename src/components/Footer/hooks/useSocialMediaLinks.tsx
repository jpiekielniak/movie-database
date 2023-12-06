import { useState } from "react";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";
import SocialMediaLink from "../types/SocialMediaLink";

export const useSocialMediaLinks = (): SocialMediaLink[] => {
    const [socialMediaLinks] = useState<SocialMediaLink[]>([
        {
            icon: IconBrandLinkedin,
            link: "https://www.linkedin.com/in/jakub-piekielniak-487497287/",
        },
        {
            icon: IconBrandGithub,
            link: "https://github.com/jpiekielniak"
        },
        {
            icon: IconMail,
            link: "mailto:jakubpiekielniak@icloud.com",
        }
    ]);

    return socialMediaLinks;
}
