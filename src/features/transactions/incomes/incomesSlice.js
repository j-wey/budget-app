import { createSlice } from "@reduxjs/toolkit";
import { INCOMES } from '../../../data/INCOMES'

const initialState = {
    incomesArray: INCOMES
}

const incomesSlice = createSlice({
    name: 'incomes',
    initialState,
    reducers: {
        addIncome: (state, action) => {
            console.log('addIncome action.payload: ', action.payload)
            console.log('addIncome state.expensesArray: ', state.incomesArray)
            const newIncome = {
                id: state.incomesArray.length + 1,
                ...action.payload
            }
            state.incomesArray.push(newIncome)
        }
    }
})

export const incomesReducer = incomesSlice.reducer

export const { addIncome } = incomesSlice.actions

export const selectAllIncomes = (state) => {
    return state.incomes.incomesArray
}