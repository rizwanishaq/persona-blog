import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";

export const useLogout = () => {
  const { dispatch, user } = useAuthContext();
  const { dispatch: dispatchWorkouts } = useWorkoutsContext();

  const logout = () => {
    // remove the user from local storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    dispatchWorkouts({ type: "SET_WORKOUTS", payload: null });
  };

  return { logout, user };
};
