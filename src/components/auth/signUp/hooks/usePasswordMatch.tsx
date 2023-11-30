import { useState, useEffect } from "react";
import { PasswordMatcher } from "../interfaces/PasswordMatcher";

export const usePasswordMatch = (formData: PasswordMatcher): boolean => {
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  useEffect(() => {
    formData.password === formData.confirmPassword
      ? setPasswordsMatch(true)
      : setPasswordsMatch(false);
  }, [formData.password, formData.confirmPassword]);

  return passwordsMatch;
};
