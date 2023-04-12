import { useSelector } from 'react-redux'
import { Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap'
import { selectAllExpenses } from './expenses/expensesSlice'
import ExpenseItem from './expenses/ExpenseItem'
import IncomeItem from './incomes/IncomeItem'
import { selectAllIncomes } from './incomes/incomesSlice'

const TransactionsList = () => {
    const expenses = useSelector(selectAllExpenses)
    const incomes = useSelector(selectAllIncomes)

    return (
        <Card
            className='my-3'
        >
            <CardHeader>
                <CardTitle className='text-center'>Monthly Transactions</CardTitle>
            </CardHeader>
            <CardBody>
                <Table responsive striped>
                    <thead>
                        <tr><strong>Expenses</strong></tr>
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
                    <thead>
                        <tr><strong>Incomes</strong></tr>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Source</th>
                            <th>Category</th>
                            <th>Account</th>
                        </tr>
                    </thead>
                    <tbody>
                        {incomes.map((income, idx) => {
                            return <IncomeItem key={idx} income={income} />
                        })}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    )
}

export default TransactionsList