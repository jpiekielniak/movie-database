import React from "react";
import styles from "./styles/signInButton.module.css";
import { Link } from "react-router-dom";

const SignInButton: React.FC = React.memo(() => {
  return (
    <Link
      to="/sign-in"
      style={{ position: "absolute", right: "20px", top: "20px" }}
      className={styles.btn}
    >
      Zaloguj się
    </Link>
  );
});

export default SignInButton;
