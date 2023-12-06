import React from "react";
import { Container, TextInput, Button } from "@mantine/core";
import styles from "./styles/signUpLayout.module.css";
import { IconLogin2 } from "@tabler/icons-react";
import { useSignUpData } from "./hooks/useSignUpData";
import SignInLink from "./SignInLink";

const SignInLayout: React.FC = () => {
  const [formData, handleChange] = useSignUpData();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    // Send to API
  };

  return (
    <Container className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.descr}>Rejestracja</div>

        <div className={styles.input}>
          <TextInput
            required
            id="login"
            placeholder="Login"
            value={formData.login}
            onChange={handleChange}
          />
        </div>

        <div className={styles.input}>
          <TextInput
            required
            id="nick"
            type="text"
            placeholder="Nazwa"
            value={formData.nick}
            onChange={handleChange}
          />
        </div>

        <div className={styles.input}>
          <TextInput
            required
            id="email"
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />

          <div className={styles.input}>
            <TextInput
              required
              id="password"
              type="password"
              placeholder="Hasło"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button
          type="submit"
          fullWidth
          variant="gradient"
          gradient={{ from: "blue", to: "cyan" }}
          className={styles.btn}
        >
          Zarejestruj się <IconLogin2 />
        </Button>

        <div className={styles.textCenter}>
          <SignInLink />
        </div>
      </form>
    </Container>
  );
};

export default SignInLayout;
