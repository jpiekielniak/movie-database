import React from "react";
import { Container, TextInput, Button } from "@mantine/core";
import styles from "../SignIn/styles/signInLayout.module.css";
import { IconLogin2 } from "@tabler/icons-react";
import { useSignInData } from "./hooks/useSignInData";
import SignUpLink from "./SignUpLink";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignInLayout: React.FC = () => {
  const [signInValues, handleInputChange] = useSignInData();
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(signInValues);
    axios
      .post("https://at.usermd.net/api/user/auth", signInValues)
      .then((response) => {
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        handleNavigate();
        window.dispatchEvent(new Event("successfulLogin"));

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container size="sm" className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.description}>Logowanie</div>

        <div className={styles.input}>
          <TextInput
            required
            id="login"
            placeholder="Login"
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.input}>
          <TextInput
            required
            id="password"
            type="password"
            placeholder="Hasło"
            onChange={handleInputChange}
          />
        </div>

        <Button
          type="submit"
          fullWidth
          variant="gradient"
          gradient={{ from: "blue", to: "cyan" }}
          className={styles.btn}
        >
          Zaloguj się <IconLogin2 />
        </Button>

        <p className={styles.textCenter}>
          <span className={styles.whiteText}>Nie masz konta?</span>{" "}
          <SignUpLink />
        </p>
      </form>
    </Container>
  );
};

export default SignInLayout;
