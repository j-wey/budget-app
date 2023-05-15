import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import { Row, Col, Button, CardBody } from 'reactstrap'
import { postExpense } from './expensesSlice'

const ExpenseForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = (values) => {
        const expense = {
            account: values.account,
            amount: values.amount,
            category: values.category,
            date: values.date,
            transType: values.transType,
            vendor: values.vendor
        }
        dispatch(postExpense(expense))
    }

    return (
        <CardBody>
            <Formik
                initialValues={{
                    account: 'Account...',
                    amount: '0.00',
                    categroy: '',
                    date: 'mm/dd',
                    transType: 'expense',
                    vendor: ''
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Row>
                        <Col xs='8'>
                            <Field
                                name='vendor'
                                type='text'
                                className='form-control'
                                placeholder='Vendor'
                            />
                            <Field
                                name='category'
                                as='select'
                                className='form-control my-2'
                                defaultValue='Category...'
                            >
                                <option disabled>Category...</option>
                                <option>Housing</option>
                                <option>Utilities</option>
                                <option>Food</option>
                                <option>Recreation</option>
                                <option>Discretionary</option>
                                <option>Savings & Investment</option>
                            </Field>
                            <Field
                                name='account'
                                as='select'
                                className='form-control'
                            >
                                <option disabled>Account...</option>
                                <option>Alaska Card</option>
                                <option>Venture Card</option>
                                <option>AmEx Card</option>
                                <option>Chase Card</option>
                                <option>Checking</option>
                                <option>Savings</option>
                            </Field>
                        </Col>
                        <Col xs='4'>
                            <Field
                                name='date'
                                type='date'
                                className='form-control'
                            />
                            <Field
                                name='amount'
                                type='number'
                                className='form-control my-2'
                            />
                            <Button type='submit' className='trans-sub-btn'>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Formik>
        </CardBody>
    )
}

export default ExpenseForm