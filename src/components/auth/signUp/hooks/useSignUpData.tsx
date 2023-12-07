import { ChangeEvent, useState } from "react";
import { TSignUp } from "../types/SignUp";

export const useSignUpData = (): [TSignUp, (event: ChangeEvent<HTMLInputElement>) => void] => {
    const [formData, setFormData] = useState<TSignUp>({
        login: "",
        nick: "",
        email: "",
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