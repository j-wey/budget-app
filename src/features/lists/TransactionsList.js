import { useSelector } from 'react-redux'
import { Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap'
import { selectAllExpenses } from '../transactions/expenses/expensesSlice'
import ExpenseItem from './ExpenseItem'

const TransactionsList = () => {
    const expenses = useSelector(selectAllExpenses)
    console.log(expenses)
    
  return (
    <Card>
        <CardHeader>
            <CardTitle className='text-center'>Monthly Expenses</CardTitle>
        </CardHeader>
        <CardBody>
            <Table responsive striped>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Vendor</th>
                        <th>Category</th>
                        <th>Account</th>
                    </tr>
                </thead>
                <tbody>
                {expenses.map((expense, idx) => {
                    return <ExpenseItem key={idx} expense={expense} />
                })}
                </tbody>
            </Table>
        </CardBody>
    </Card>
    )
}

export default TransactionsList