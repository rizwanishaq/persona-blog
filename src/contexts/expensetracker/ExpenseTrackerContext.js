import { createContext, useReducer } from "react";

export const ExpenseTrackerContext = createContext();

export const expensetrackerReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        transactions: [...state.transactions, action.payload],
      };
    case "DELETE_TRANSACTION":
      return {
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

const ExpenseTrackerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expensetrackerReducer, {
    transactions: [],
  });
  return (
    <ExpenseTrackerContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default ExpenseTrackerContextProvider;
