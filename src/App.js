import TransactionInput from './features/TransactionInput';
import logo from './logo.svg';
import './App.css';
import { Container } from 'reactstrap';
import ExpensesList from './features/ExpensesList';

function App() {
  return (
    <Container>
      <TransactionInput />
      <ExpensesList />
    </Container>
  );
}

export default App;
