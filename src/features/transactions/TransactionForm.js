import { CardBody } from 'reactstrap'
import ExpenseForm from './expenses/ExpenseForm'
import IncomeForm from './incomes/IncomeForm'

const TransactionForm = ({ type }) => {  
  return (
    <CardBody>
        {type === 'expense' ? <ExpenseForm /> : <IncomeForm />}
      </CardBody>
    )
}

export default TransactionForm