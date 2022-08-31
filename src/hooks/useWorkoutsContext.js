import { useContext } from "react";
import { WorkoutContext } from "../contexts/workout/WorkoutContext";

export const useWorkoutsContext = () => {
  return useContext(WorkoutContext);
};
