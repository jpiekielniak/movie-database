import React, {useState} from "react";
import {Container, TextInput, Button, Notification} from "@mantine/core";
import styles from "../SignIn/styles/signInLayout.module.css";
import {IconLogin2} from "@tabler/icons-react";
import SignUpLink from "./SignUpLink";
import useFormInput from "../Shared/hooks/useFormInput";
import useSignInSubmit from "./hooks/useSignInSubmit";

const SignInLayout: React.FC = () => {
    const login = useFormInput("");
    const password = useFormInput("");
    const [error, setError] = useState<string | null>(null);
    const {handleSubmit} = useSignInSubmit();

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = {
            login: login.value,
            password: password.value,
        };

        try {
            await handleSubmit(formData);
        } catch (error) {
            setError("Nieprawidłowy login lub hasło");
        }
    };

    return (
        <Container size="sm" className={styles.container}>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <div className={styles.description}>Logowanie</div>

                <div className={styles.input}>
                    <TextInput
                        required
                        id="login"
                        placeholder="Login"
                        value={login.value}
                        onChange={login.onChange}
                    />
                </div>

                <div className={styles.input}>
                    <TextInput
                        required
                        id="password"
                        type="password"
                        placeholder="Hasło"
                        value={password.value}
                        onChange={password.onChange}
                    />
                </div>

                {error && (
                    <Notification
                        title="Błąd logowania"
                        color="red"
                        withCloseButton
                        onClose={() => setError(null)}
                    >
                        {error}
                    </Notification>
                )}

                <Button
                    type="submit"
                    fullWidth
                    variant="gradient"
                    gradient={{from: "blue", to: "cyan"}}
                    className={styles.btn}
                >
                    Zaloguj się <IconLogin2/>
                </Button>

                <p className={styles.textCenter}>
                    <span className={styles.whiteText}>Nie masz konta?</span>{" "}
                    <SignUpLink/>
                </p>
            </form>
        </Container>
    );
};

export default SignInLayout;
