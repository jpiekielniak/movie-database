import React, { useState } from "react";
import { Container, TextInput, Button, Notification } from "@mantine/core";
import "./styles/signUpLayout.css";
import { IconLogin2 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { IconUserPlus } from "@tabler/icons-react";


const SignInLayout: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  return (
    <Container size="sm" className="container">
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
          style={{ padding: "8px" }}
        >
          Zarejestruj się <IconLogin2 />
        </Button>

        <p style={{ textAlign: "center", marginTop: "10px", color: "white" }}>
          <span style={{ color: "white" }}>Masz już konto?</span>{" "}
          <Link to="/sign-in" style={{ textDecoration: "none", color: "lime" }}>
            Zaloguj się <IconUserPlus size={20} strokeWidth={1.5} />
          </Link>
        </p>
      </form>
      {!passwordsMatch && (
        <Notification
          color="red"
          icon={<IconUserPlus />}
          withCloseButton={false}
          style={{ backgroundColor: "transparent" }}
        >
          <p style={{ fontWeight: "bold", color: "white" }}>
            Hasła nie są identyczne. Proszę wprowadzić takie same hasła.
          </p>
        </Notification>
      )}
    </Container>
  );
};

export default SignInLayout;
