import React from 'react';
import { ActionIcon } from "@mantine/core";
import { TMedia } from "./types/Media";

const SocialMedia: React.FC<TMedia> = React.memo(({ link, icon }) => {
    const Icon = icon;
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <ActionIcon
              size="lg"
              color="white"
              variant="subtle"
            >
              <Icon stroke={1.5} />
            </ActionIcon>
          </a>
    );
});

export default SocialMedia;
