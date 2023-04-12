import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { expensesReducer } from "../features/transactions/expenses/expensesSlice";

export const store = configureStore({
    reducer: {
        expenses: expensesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
})