import { useContext } from "react";
import { LocationContext } from "../contexts/location/LocationContext";

export const useLocation = () => {
  return useContext(LocationContext);
};
