import { useEffect } from "react"
import { useDispatch } from "react-redux"
import "./App.scss"
import { Col, Container } from "reactstrap"
import { fetchExpenses } from "./features/transactions/expenses/expensesSlice"
import { fetchIncomes } from "./features/transactions/incomes/incomesSlice"
import Header from "./components/Header"
import TransactionInput from "./features/transactions/TransactionInput"
import TransactionsList from "./features/transactions/TransactionsList"
import OverviewCard from "./components/OverviewCard"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchExpenses())
        dispatch(fetchIncomes())
    }, [dispatch])

    return (
        <div className='App'>   
            <Header />
            <Container>
                <Col>
                    <OverviewCard />
                </Col>
                <Col>
                    <TransactionInput />
                    <TransactionsList />
                </Col>
            </Container>
        </div>
    )
}

export default App
