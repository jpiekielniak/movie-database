import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {isExpired} from 'react-jwt';
import styles from './styles/navbar.module.css';
import {Button} from "@mantine/core";
import useLogoutButton from "./hooks/useLogoutButton";

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const logoutUser = useLogoutButton();

    useEffect(() => {
        checkSession();
        const handleLogin = () => checkSession();

        window.addEventListener('successfulLogin', handleLogin);
    }, []);

    const checkSession = () => {
        const token = window.localStorage.getItem('token');
        const isTokenExpired = token ? isExpired(token) : false;

        setIsLoggedIn(token ? !isTokenExpired : false);
    };

    const handleLogout = () => {
        logoutUser().then(() => {
            window.location.href = '/';
            setIsLoggedIn(false);
        }).catch((error) => console.log('error', error));
    };

    return (
        <div>
            <Link to="/" className={styles.button}>Strona główna</Link>

            {isLoggedIn ? (
                <>
                    <Link to="/add" className={styles.button}>Dodaj film</Link>
                    <Button onClick={handleLogout} className={styles.button}>Wyloguj się</Button>
                </>
            ) : (
                <>
                    <Link to="/sign-in" className={styles.button}>Logowanie</Link>
                    <Link to="/sign-up" className={styles.button}>Rejestracja</Link>
                </>
            )}
        </div>
    );
};

export default NavBar;
