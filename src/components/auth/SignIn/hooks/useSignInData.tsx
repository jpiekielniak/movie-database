import { ChangeEvent, useState } from "react";
import { SignIn } from "../interfaces/SignIn";

export const useSignInData = (): [SignIn, (event: ChangeEvent<HTMLInputElement>) => void] => {
    const [formData, setFormData] = useState<SignIn>({
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