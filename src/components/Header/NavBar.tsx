import React from "react";
import { Link } from "react-router-dom";
import { isExpired } from "react-jwt";
import styles from "./styles/navbar.module.css";

const NavBar = () => {
    const token = localStorage.getItem('token');
    const isLoggedIn = token && !isExpired(token);

    const handleLogout = () => {
        localStorage.removeItem('token');
    };

    const renderLoggedInButtons = () => (
        <>
            <Link to="/" className={styles.button}>Strona główna</Link>
            <Link to="/add" className={styles.button}>Dodaj film</Link>
            <button onClick={handleLogout} className={styles.button}>Wyloguj się</button>
        </>
    );

    const renderLoggedOutButtons = () => (
        <>
            <Link to="/" className={styles.button}>Strona główna</Link>
            <Link to="/sign-in" className={styles.button}>Logowanie</Link>
            <Link to="/sign-up" className={styles.button}>Rejestracja</Link>
        </>
    );

    return <div>{isLoggedIn ? renderLoggedInButtons() : renderLoggedOutButtons()}</div>;
};

export default NavBar;
