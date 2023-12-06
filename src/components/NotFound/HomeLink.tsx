import styles from "./styles/notFound.module.css";
import { Link } from "react-router-dom";

const HomeLink: React.FC = () => {
  return (
    <Link to="/" className={styles.link}>
      Wróć do strony głównej
    </Link>
  );
};

export default HomeLink;
