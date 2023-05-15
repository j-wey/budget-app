import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../app/baseUrl";
// import { EXPENSES } from '../../../data/EXPENSES'

export const fetchExpenses = createAsyncThunk(
    'expenses/fetchExpenses',
    async () => {
        const response = await fetch(baseUrl + 'expenses')
        if (!response.ok) {
            return Promise.reject('Unable to fetch expense data, status: ' + response.status)
        }
        const data = await response.json()
        return data
    }
)

export const postExpense = createAsyncThunk(
    'expenses/postExpense',
    async (expense, { dispatch }) => {
        const response = await fetch(baseUrl + 'expenses', {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: { 'Content-Type': 'application/json' }
        })
        if (!response.ok) {
            return Promise.reject(response.status)
        }
        const data = await response.json()
        dispatch(addExpense(data))
    }
)

const initialState = {
    expensesArray: [],
    isLoading: true,
    errMsg: ''
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
    },
    extraReducers: {
        [fetchExpenses.pending]: (state) => {
            state.isLoading = true
        },
        [fetchExpenses.fulfilled]: (state, action) => {
            state.isLoading = false
            state.errMsg = ''
            state.expensesArray = action.payload
        },
        [fetchExpenses.rejected]: (state, action) => {
            state.isLoading = false
            state.errMsg = action.error ? action.error.message : 'Data fetch failed'
        },
        [postExpense.rejected]: (state, action) => {
            alert('Transaction could not be posted\nError: ' +
                (action.error ? action.error.message : 'Fetch failed')
            )
        }
    }
})

export const expensesReducer = expensesSlice.reducer

export const { addExpense } = expensesSlice.actions

export const selectAllExpenses = (state) => {
    return state.expenses.expensesArray
}