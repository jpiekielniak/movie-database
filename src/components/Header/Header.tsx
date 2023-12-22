import React from "react";
import {Container, Image} from "@mantine/core";
import {Link} from "react-router-dom";
import styles from "./styles/header.module.css";
import useHeaderButtons from "./hooks/useHeaderButtons";

const Header: React.FC = React.memo(() => {
    const buttons = useHeaderButtons();
    return (
        <div className={styles.headerContainer}>
            <Container>
                <div className={styles.flexContainer}>
                    <div>
                        <Link to="/">
                            <Image
                                src="movie_club.png"
                                alt="Movie Logo"
                                width={120}
                                height={50}
                                className={styles.image}
                            />
                        </Link>
                    </div>
                    <div className={styles.rightContent}>
                        {buttons}
                    </div>
                </div>
            </Container>
        </div>
    );
});

export default Header;
