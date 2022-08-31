import { useContext } from "react";
import { ExpenseTrackerContext } from "../contexts/expensetracker/ExpenseTrackerContext";

export const useExpenseTrackerContext = () => {
  return useContext(ExpenseTrackerContext);
};
