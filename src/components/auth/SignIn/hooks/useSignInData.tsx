import { ChangeEvent, useState } from "react";
import { TSignIn } from "../types/SignIn";

export const useSignInData = (): [TSignIn, (event: ChangeEvent<HTMLInputElement>) => void] => {
    const [formData, setFormData] = useState<TSignIn>({
        login: "",
        password: ""
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {id, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }

    return [formData, handleChange]
}