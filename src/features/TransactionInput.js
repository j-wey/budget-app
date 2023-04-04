import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Container, Row, Col, Button } from 'reactstrap'
import TransactionForm from '../components/TransactionForm'

const TransactionInput = () => {
    const [transType, setTransType] = useState('expense')
    
  return (
    <Card>
        <CardHeader>
            <CardTitle className='text-center'>Add a New Transaction</CardTitle>
        </CardHeader>
        <CardBody>
            <TransactionForm transType={transType} />
        </CardBody>
    </Card>
    
    )
}

export default TransactionInput