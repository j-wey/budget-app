import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { Row, Col, Label, FormGroup, Button } from 'reactstrap'
import { ExpFields, IncFields } from './transFormTypes'

const TransactionForm = () => {
    const [expense, setExpense] = useState(true)

    return (
        <Formik
            initialValues={{
                date: 'mm/dd',
                amount: '0.00',
                vendor: 'Vendor',
                source: 'Source',
                account: 'Account',
                categroy: 'Category'
            }}
        >
            <Form>
                <Row>
                    <Col xs='4'>
                        <FormGroup>
                            <Label onClick={() => setExpense(true)}>
                                <Field checked
                                    type='radio'
                                    name='transType'
                                    value='expense'
                                /> Expense
                            </Label>
                            <Label onClick={() => setExpense(false)}>
                                <Field
                                    type='radio'
                                    name='transType'
                                    value='income'
                                /> Income
                            </Label>
                        </FormGroup>
                        <Field
                            name='date'
                            type='date'
                            className='form-control'
                        />
                        <Field
                            name='amount'
                            type='number'
                            className='form-control'
                        />
                    </Col>
                    <Col xs='8'>
                        {expense ? <ExpFields /> : <IncFields /> }
                        <Button>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Formik>
    )
}

export default TransactionForm