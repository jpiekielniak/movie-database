import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isExpired } from 'react-jwt';
import styles from './styles/navbar.module.css';
import {Button} from "@mantine/core";
import useLogoutButton from "./hooks/useLogoutButton";

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const logoutUser = useLogoutButton();

    const checkSession = () => {
        const token = window.localStorage.getItem('token');

        if (token) {
            const expired = isExpired(token);
            setIsLoggedIn(!expired);
        } else {
            setIsLoggedIn(false);
        }
    };


    useEffect(() => {
        checkSession();
        const handleLogin = () => {
            checkSession();
        };

        window.addEventListener('successfulLogin', handleLogin);

    }, []);

    const handleLogout = () => {
        logoutUser().then(() => {
            window.location.href = '/';
            setIsLoggedIn(false);
        }).catch(() => {
            console.log('error');
        });
    };

    const renderLoggedInButtons = () => (
        <>
            <Link to="/" className={styles.button}>Strona główna</Link>
            <Link to="/add" className={styles.button}>Dodaj film</Link>
            <Button onClick={handleLogout} className={styles.button}>Wyloguj się</Button>
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
