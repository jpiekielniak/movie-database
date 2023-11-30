import { useState, useEffect } from "react";
import { FormData } from "../interfaces/FormData";

export const usePasswordMatch = (formData: FormData): boolean => {
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  useEffect(() => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  }, [formData.password, formData.confirmPassword]);

  return passwordsMatch;
};
