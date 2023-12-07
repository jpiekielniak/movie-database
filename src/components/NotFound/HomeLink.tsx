import React from "react";
import styles from "./styles/notFound.module.css";
import { Link } from "react-router-dom";

const HomeLink: React.FC = React.memo(() => {
  return (
    <Link to="/" className={styles.link}>
      Wróć do strony głównej
    </Link>
  );
});

export default HomeLink;
