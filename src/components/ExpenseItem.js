import React from 'react'

const ExpenseItem = ({ expense }) => {
    const { date, amount, vendor, category, account } = expense
    
  return (
    <>
        <tr>
            <td>{date}</td>
            <td>{amount}</td>
            <td>{vendor}</td>
            <td>{category}</td>
            <td>{account}</td>
        </tr>
    </>
  )
}

export default ExpenseItem