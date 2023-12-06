import styles from "./styles/signInLayout.module.css";
import { IconUserPlus } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SignUpLink: React.FC = () => {
  return (
    <Link to="/sign-up" className={styles.link}>
      Zarejestruj się <IconUserPlus size={20} strokeWidth={1.5} />
    </Link>
  );
};

export default SignUpLink;
