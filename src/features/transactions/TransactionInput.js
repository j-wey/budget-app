import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Container, Row, Col, Button, ButtonGroup } from 'reactstrap'
import { useSpring, animated } from 'react-spring'
import TransactionForm from './TransactionForm'
import ExpenseForm from './expenses/ExpenseForm'
import IncomeForm from './incomes/IncomeForm'

const TransactionInput = () => {
    const [transType, setTransType] = useState(null)

    let content = null
    if (transType === 'expense') {
        content = <ExpenseForm />
    } else if (transType === 'income') {
        content = <IncomeForm />
    } else {
        content = null
    }

    return (
        <Card className='dash-card trans-input'>
            <CardHeader className='dash-card-head'>
                <Row className='align-items-center'>
                    <Col>
                        New Transaction
                    </Col>
                    <Col>
                        <ButtonGroup xs='4'>
                            <Button
                                className='exp-btn'
                                outline
                                onClick={() => setTransType('expense')}
                                active={transType === 'expense'}
                            >
                                -
                            </Button>
                            <Button
                                className='inc-btn'
                                outline
                                onClick={() => setTransType('income')}
                                active={transType === 'income'}
                            >
                                +
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </CardHeader>
                {content}
        </Card>

    )
}

export default TransactionInput