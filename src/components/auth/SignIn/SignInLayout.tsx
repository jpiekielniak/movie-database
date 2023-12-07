import React from "react";
import { Container, TextInput, Button } from "@mantine/core";
import styles from "../SignIn/styles/signInLayout.module.css";
import { IconLogin2 } from "@tabler/icons-react";
import { useSignInData } from "./hooks/useSignInData";
import SignUpLink from "./SignUpLink";
import Footer from "../../footer/Footer";

const SignInLayout: React.FC = () => {
  const [signInValues, handleInputChange] = useSignInData();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(signInValues);
    //TODO: handle submit
  };

  return (
    <Container size="sm" className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.descr}>Logowanie</div>

        <div className={styles.input}>
          <TextInput
            required
            id="email"
            placeholder="E-mail"
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
