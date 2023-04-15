import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import { Container } from 'reactstrap'
import { fetchExpenses } from './features/transactions/expenses/expensesSlice'
import { fetchIncomes } from './features/transactions/incomes/incomesSlice'
import TransactionInput from './features/transactions/TransactionInput'
import TransactionsList from './features/transactions/TransactionsList'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchExpenses())
    dispatch(fetchIncomes())
  }, [dispatch])

  return (
    <div className='App'>
      <Container>
        <TransactionInput />
        <TransactionsList />
      </Container>
    </div>
  )
}

export default App
