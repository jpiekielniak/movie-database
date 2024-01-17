import { useState, ChangeEvent } from "react";

interface FormInputProps {
    value: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const useFormInput = (initialValue: string | number): FormInputProps => {
    const [value, setValue] = useState<string | number>(initialValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value as string | number);
    };

    return {
        value,
        onChange: handleChange,
    };
};

export default useFormInput;
