import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../app/baseUrl";

export const fetchIncomes = createAsyncThunk(
    'incomes/fetchIncomes',
    async () => {
        const response = await fetch(baseUrl + 'incomes')
        if(!response.ok) {
            return Promise.reject('Unable to fetch data, status: ' + response.status)
        }
        const data = await response.json()
        return data
    }
)

const initialState = {
    incomesArray: [],
    isLoading: true,
    errMsg: ''
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
    },
    extraReducers: {
        [fetchIncomes.pending]: (state) => {
            state.isLoading = true
        },
        [fetchIncomes.fulfilled]: (state, action) => {
            state.isLoading = false
            state.errMsg = ''
            state.incomesArray = action.payload
        },
        [fetchIncomes.rejected]: (state, action) => {
            state.errMsg = action.error ? action.error.message : 'Fetch failed'
        }
    }
})

export const incomesReducer = incomesSlice.reducer

export const { addIncome } = incomesSlice.actions

export const selectAllIncomes = (state) => {
    return state.incomes.incomesArray
}