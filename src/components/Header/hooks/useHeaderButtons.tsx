import React from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

const useHeaderButtons = (): JSX.Element[] => {
    const buttons = [
        { to: "/", text: "Strona główna" },
        { to: "/add", text: "Dodaj film" },
        { to: "/sign-up", text: "Rejestracja" },
        { to: "/sign-in", text: "Logowanie" },
    ];

    return buttons.map(({ to, text }) => (
        <Link key={to} to={to}>
            <Button className={styles.button}>{text}</Button>
        </Link>
    ));
};

export default useHeaderButtons;
