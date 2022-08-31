import { useContext } from "react";
import { AuthContext } from "../contexts/auth/AuthContext";

export const useAuthContext = () => {
  return useContext(AuthContext);
};
