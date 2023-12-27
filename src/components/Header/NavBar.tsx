import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isExpired } from 'react-jwt';
import styles from './styles/navbar.module.css';
import {Button} from "@mantine/core";
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const navigate = useNavigate();
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
        window.localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/');
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
