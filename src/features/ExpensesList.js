import { Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap'
import { selectAllExpenses } from '../components/expensesSlice'
import ExpenseItem from '../components/ExpenseItem'

const ExpensesList = () => {
    const expenses = selectAllExpenses()
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
                {expenses.map((expense) => {
                    return <ExpenseItem expense={expense} />
                })}
                </tbody>
            </Table>
        </CardBody>
    </Card>
    )
}

export default ExpensesList