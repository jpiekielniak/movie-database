import React, { ChangeEvent, useState } from "react";
import { FormData } from "../interfaces/FormData";


export const useFormData = (): [FormData, (event: ChangeEvent<HTMLInputElement>) => void] => {
    const [formData, setFormData] = useState<FormData>({
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