import axios, {AxiosError} from "axios";
import {TSignInForm} from "../types/SignIn";

const useSignInSubmit = () => {

        const handleNavigate = () => window.location.href = "/";

        const handleSuccessfulLogin = () => {
            handleNavigate();
            window.dispatchEvent(new Event("successfulLogin"));
        };

        const handleSubmit = async (formData: TSignInForm) => {
            await axios.post(
                "https://at.usermd.net/api/user/auth",
                formData
            ).then((response) => {
                window.localStorage.setItem("token", response.data.token);
                handleSuccessfulLogin();
            }).catch(() => {
                throw new AxiosError();
            })
        }

        return {handleSubmit};
    }
;

export default useSignInSubmit;
