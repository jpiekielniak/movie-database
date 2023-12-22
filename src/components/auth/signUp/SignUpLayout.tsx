import React, {useState} from "react";
import {Container, TextInput, Button, Notification} from "@mantine/core";
import styles from "./styles/signUpLayout.module.css";
import {IconLogin2} from "@tabler/icons-react";
import SignInLink from "./SignInLink";
import {useSignUpSubmit} from "./hooks/useSignUpSubmit";
import {TSignUpForm} from "./types/SignUp";
import useFormInput from "../Shared/hooks/useFormInput";

const SignUpLayout: React.FC = () => {
    const name = useFormInput('');
    const email = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState<string | null>('');
    const {handleSubmit} = useSignUpSubmit();

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData: TSignUpForm = {
            name: name.value,
            email: email.value,
            password: password.value,
        };

        try {
            await handleSubmit(formData);
        } catch (error) {
            setError("Błędna nazwa lub e-mail");
        }
    };

    return (
        <Container className={styles.container}>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <div className={styles.input}>
                    <TextInput
                        required
                        id="name"
                        type="text"
                        placeholder="Nazwa"
                        value={name.value}
                        onChange={name.onChange}
                    />
                </div>

                <div className={styles.input}>
                    <TextInput
                        required
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        value={email.value}
                        onChange={email.onChange}
                    />

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
                </div>

                {error && (
                    <Notification
                        title="Błąd rejestracji"
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
                    Zarejestruj się <IconLogin2/>
                </Button>
                <div className={styles.textCenter}>
                    <SignInLink/>
                </div>
            </form>
        </Container>
    );
};

export default SignUpLayout;