import React, { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const user = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(user.error);
    }

    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "LOGIN", payload: user });
      setIsLoading(false);
    }
  };

  return { signup, error, isLoading };
};
