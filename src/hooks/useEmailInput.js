import { useState } from "react";

// Only these characters are valid in an email address
// a-z, 0-9, and . _ % + - @
const STRIP_INVALID = /[^a-z0-9._%+\-@]/g;

// Full email format check used on blur / submit
const EMAIL_REGEX = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;

export default function useEmailInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  function handleChange(e) {
    const cleaned = e.target.value
      .toLowerCase()                  // convert to lowercase as user types
      .replace(STRIP_INVALID, "");    // strip anything that can't appear in an email

    setValue(cleaned);

    // clear error while user is actively correcting
    if (error) setError("");
  }

  function handleBlur() {
    setTouched(true);
    validate(value);
  }

  function validate(val = value) {
    if (!val) {
      setError("Email address is required.");
      return false;
    }
    if (!EMAIL_REGEX.test(val)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  }

  function reset() {
    setValue("");
    setError("");
    setTouched(false);
  }

  return {
    value,
    error,
    touched,
    handleChange,
    handleBlur,
    validate,
    reset,
    isValid: EMAIL_REGEX.test(value),
  };
}
