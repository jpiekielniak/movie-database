import React from "react";
import { Container, TextInput, Button } from "@mantine/core";
import "../SignIn/styles/signInLayout.css";
import { IconLogin2 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { IconUserPlus } from "@tabler/icons-react";

interface SignInLayoutProps {}

const SignInLayout: React.FC<SignInLayoutProps> = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //TODO: handle submit
  };

  return (
    <Container size="sm" className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="descr">Logowanie</div>

        <div className="input">
          <TextInput required id="email" placeholder="E-mail" />
        </div>

        <div className="input">
          <TextInput
            required
            id="password"
            type="password"
            placeholder="Hasło"
          />
        </div>

        <Button
          type="submit"
          fullWidth
          variant="gradient"
          gradient={{ from: "blue", to: "cyan" }}
          style={{ padding: "8px" }}
        >
          Zaloguj się <IconLogin2 />
        </Button>

        <p style={{ textAlign: "center", marginTop: "10px", color: "white" }}>
          <span style={{ color: "white" }}>Nie masz konta?</span>{" "}
          <Link
            to="/sign-up"
            style={{ textDecoration: "none", color: "lime" }}
          >
            Zarejestruj się <IconUserPlus size={20} strokeWidth={1.5} />
          </Link>
        </p>
      </form>
    </Container>
  );
};

export default SignInLayout;
