import { useSelector } from 'react-redux'
import { Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap'
import { selectAllExpenses } from './expenses/expensesSlice'
import ExpenseItem from './expenses/ExpenseItem'
import IncomeItem from './incomes/IncomeItem'
import { selectAllIncomes } from './incomes/incomesSlice'

const TransactionsList = () => {
    const expenses = useSelector((state) => selectAllExpenses(state))
    const incomes = useSelector((state) => selectAllIncomes(state))

    return (
        <Card
            className='dash-card'
        >
            <CardHeader className='dash-card-head'>
                <CardTitle className='text-center'>Monthly Transactions</CardTitle>
            </CardHeader>
            <CardBody>
                <Table responsive striped>
                    <hr />
                    <thead className='exp-list-head'>
                        <tr className='list-title'><strong>Expenses</strong></tr>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Vendor</th>
                            <th>Category</th>
                            <th>Account</th>
                        </tr>
                    </thead>
                    <tbody className='exp-list'>
                        {expenses.map((expense, idx) => {
                            return <ExpenseItem key={idx} expense={expense} />
                        })}
                    </tbody>
                    <hr />
                    <thead className='inc-list-head'>
                        <tr className='list-title'><strong>Incomes</strong></tr>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Source</th>
                            <th>Category</th>
                            <th>Account</th>
                        </tr>
                    </thead>
                    <tbody className='inc-list'>
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