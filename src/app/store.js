import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { expensesReducer } from "../features/transactions/expenses/expensesSlice";
import { incomesReducer } from "../features/transactions/incomes/incomesSlice";

export const store = configureStore({
    reducer: {
        expenses: expensesReducer,
        incomes: incomesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
})