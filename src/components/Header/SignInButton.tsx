import styles from "./styles/signInButton.module.css";
import { Link } from "react-router-dom";

export default function SignInButton() {
  return (
    <Link
      to="/sign-in"
      style={{ position: "absolute", right: "20px", top: "20px" }}
      className={styles.btn}
    >
      Zaloguj się
    </Link>
  );
}
