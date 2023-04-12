import { createSlice } from "@reduxjs/toolkit";
import { EXPENSES } from '../../../data/EXPENSES'

const initialState = {
    expensesArray: EXPENSES
}

const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            console.log('addExpense action.payload: ', action.payload)
            console.log('addExpense state.expensesArray: ', state.expensesArray)
            const newExpense = {
                id: state.expensesArray.length + 1,
                ...action.payload
            }
            state.expensesArray.push(newExpense)
        }
    }
})

export const expensesReducer = expensesSlice.reducer

export const { addExpense } = expensesSlice.actions

export const selectAllExpenses = (state) => {
    return state.expenses.expensesArray
}