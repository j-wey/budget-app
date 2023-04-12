import TransactionAccordion from './features/transactions/TransactionAccordion'
import logo from './logo.svg'
import './App.css'
import { Container } from 'reactstrap'
import TransactionsList from './features/lists/TransactionsList'

function App() {
  return (
    <Container>
      <TransactionAccordion />
      <TransactionsList />
    </Container>
  )
}

export default App
