import { useState } from "react";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";
import { TSocialMediaLink } from "../types/SocialMediaLink";

export const useSocialMediaLinks = (): TSocialMediaLink[] => {
    const [socialMediaLinks] = useState<TSocialMediaLink[]>([
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
