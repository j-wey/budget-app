import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Container, Row, Col, Button, ButtonGroup } from 'reactstrap'
import TransactionForm from './TransactionForm'

const TransactionInput = () => {
    const [transType, setTransType] = useState('')
    
    return (
        <Card>
            <CardHeader>
                <Row className='align-items-center'>
                    <Col>
                        New Transaction
                    </Col>
                    <Col>
                        <ButtonGroup xs='4'>
                            <Button
                                color="danger"
                                outline
                                onClick={() => setTransType('expense')}
                                active={transType === 'expense'}
                            >
                                -
                            </Button>
                            <Button
                                color="success"
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
            <TransactionForm type={transType} />
        </Card>

    )
}

export default TransactionInput