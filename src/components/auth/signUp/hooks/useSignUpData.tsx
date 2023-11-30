import { ChangeEvent, useState } from "react";
import { SignUp } from "../interfaces/SignUp";

export const useSignUpData = (): [SignUp, (event: ChangeEvent<HTMLInputElement>) => void] => {
    const [formData, setFormData] = useState<SignUp>({
        email: "",
        password: "",
        confirmPassword: "",
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