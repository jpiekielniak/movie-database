import React, {FormEvent} from "react";
import {TextField, Button, Grid, Container} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import styles from './CreateMovieLayout.module.css';
import useFormInput from "../auth/Shared/hooks/useFormInput";

const CreateMovieLayout: React.FC = () => {
    const title = useFormInput('');
    const image = useFormInput('');
    const content = useFormInput('');


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            title: title.value,
            image: image.value,
            content: content.value,
        };
        console.log("Dodano film:", formData);
    };

    const theme = createTheme({
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        },
                        '& input': {
                            color: 'white',
                        },
                        '& input::placeholder': {
                            color: 'white',
                        },
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    style={{minHeight: '100vh'}}
                >
                    <Grid item xs={12} sm={8} md={6}>
                        <form onSubmit={handleSubmit} className={styles.formContainer}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Tytuł"
                                        name="title"
                                        value={title.value}
                                        onChange={title.onChange}
                                        variant="outlined"
                                        InputLabelProps={{
                                            className: styles.textFieldLabel
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Obraz"
                                        name="image"
                                        value={image.value}
                                        onChange={image.onChange}
                                        variant="outlined"
                                        InputLabelProps={{
                                            className: styles.textFieldLabel
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label="Treść"
                                        name="content"
                                        value={content.value}
                                        onChange={content.onChange}
                                        variant="outlined"
                                        InputLabelProps={{
                                            className: styles.textFieldLabel
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} style={{textAlign: 'center'}}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        Dodaj Film
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default CreateMovieLayout;
