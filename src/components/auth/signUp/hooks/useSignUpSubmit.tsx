import {useNavigate} from "react-router-dom";
import {TSignUpForm} from "../types/SignUp";
import axios, {AxiosError} from "axios";

export const useSignUpSubmit = () => {
    const navigate = useNavigate();
    const handleNavigate = () => navigate('/sign-in');

    const handleSubmit = async (formData: TSignUpForm) => {
        await axios
            .post('https://at.usermd.net/api/user/create', formData)
            .then(() => {
                handleNavigate();
            })
            .catch(() => {
                throw new AxiosError();
            });
    }

    return {
        handleSubmit
    }
};
