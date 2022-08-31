import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

import ExpenseTrackerContextProvider from "./contexts/expensetracker/ExpenseTrackerContext";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ToastContainer />
    <QueryClientProvider client={queryClient}>
      <ExpenseTrackerContextProvider>
        <App />
      </ExpenseTrackerContextProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
