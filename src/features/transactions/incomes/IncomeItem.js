import { formatDate } from "../../../utils/formatDate"

const ExpenseItem = ({ income }) => {
    const { date, amount, source, category, account } = income
    
  return (
    <>
        <tr>
            <td>{formatDate(date)}</td>
            <td>${amount}</td>
            <td>{source}</td>
            <td>{category}</td>
            <td>{account}</td>
        </tr>
    </>
  )
}

export default ExpenseItem