import React, { useState } from "react";
import { Container, Image } from "@mantine/core";
import { Link } from "react-router-dom";
import SignInButton from "./SignInButton";
import styles from "./styles/header.module.css";

const Header: React.FC = React.memo(() => {

  return (
    <div className={styles.headerContainer}>
      <Container>
        <div className={styles.flexContainer}>
          <div className={styles.leftContent}>
            <Link to="/" className={styles.logoLink}>
              <Image
                src="movie_club.png"
                alt="Movie Logo"
                width={120}
                height={50}
                className={styles.image}
              />
            </Link>
          </div>
          <div className={styles.centerContent}></div>
          <div className={styles.rightContent}>
            <SignInButton />
          </div>
        </div>
      </Container>
    </div>
  );
});

export default Header;
