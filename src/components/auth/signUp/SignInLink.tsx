import styles from "./styles/signUpLayout.module.css";
import { IconUserPlus } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SignInLink: React.FC = () => {
    return (
        <Link to="/sign-in" className={styles.link}>
            Masz już konto? Zaloguj się {""}
            <IconUserPlus size={20} strokeWidth={1.5} />
        </Link>
    )
}

export default SignInLink;