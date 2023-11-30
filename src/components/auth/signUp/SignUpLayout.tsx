import React from "react";
import { Container, TextInput, Button, Notification } from "@mantine/core";
import "./styles/signUpLayout.css";
import { IconLogin2 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { IconUserPlus } from "@tabler/icons-react";
import { useSignUpData } from "./hooks/useSignUpData";
import { usePasswordMatch } from "./hooks/usePasswordMatch";

const SignInLayout: React.FC = () => {
  const [formData, handleChange] = useSignUpData();
  const passwordsMatch = usePasswordMatch(formData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    // Send to API
  };

  return (
    <Container className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="descr">Rejestracja</div>

        <div className="input">
          <TextInput
            required
            id="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <TextInput
            required
            id="password"
            type="password"
            placeholder="Hasło"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <TextInput
            required
            id="confirmPassword"
            type="password"
            placeholder="Potwierdź hasło"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          fullWidth
          variant="gradient"
          gradient={{ from: "blue", to: "cyan" }}
          style={{ padding: "8px", marginTop: "30px", marginBottom: "10px" }}
        >
          Zarejestruj się <IconLogin2 />
        </Button>

        <div
          style={{ textAlign: "center", color: "white", marginBottom: "10px" }}
        >
          <Link to="/sign-in" style={{ textDecoration: "none", color: "lime" }}>
            Masz już konto? Zaloguj się{" "}
            <IconUserPlus size={20} strokeWidth={1.5} />
          </Link>
        </div>

        {!passwordsMatch && (
          <div className="notification-wrapper">
            <div className="notification">
              <Notification
                color="red"
                icon={<IconUserPlus />}
                withCloseButton={false}
                style={{ backgroundColor: "transparent" }}
              >
                <p
                  style={{ fontWeight: "bold", color: "white", width: "175px" }}
                >
                  Hasła nie są identyczne. Proszę wprowadzić takie same hasła.
                </p>
              </Notification>
            </div>
          </div>
        )}
      </form>
    </Container>
  );
};

export default SignInLayout;
