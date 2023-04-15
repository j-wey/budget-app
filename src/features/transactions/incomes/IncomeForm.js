import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { Row, Col, Button, CardBody } from 'reactstrap'
import { addIncome } from './incomesSlice'

const IncomeForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = (values) => {
        const income = {
            account: values.account,
            amount: values.amount,
            category: values.category,
            date: values.date,
            transType: values.transType,
            source: values.source
        }
        dispatch(addIncome(income))
    }

    return (
        <CardBody>
            <Formik
                initialValues={{
                    account: 'Account...',
                    amount: '0.00',
                    categroy: '',
                    date: 'mm/dd',
                    source: '',
                    transType: 'income',
                    vendor: ''
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Row>
                        <Col xs='8'>
                            <Field
                                name='source'
                                type='text'
                                className='form-control'
                                placeholder='Source'
                            />
                            <Field
                                name='category'
                                as='select'
                                className='form-control my-2'
                                defaultValue='Category...'
                            >
                                <option disabled>Category...</option>
                                <option>Payroll</option>
                                <option>Bonus</option>
                                <option>Gift</option>
                                <option>Reimbursement</option>
                                <option>Tax Return</option>
                            </Field>
                            <Field
                                name='account'
                                as='select'
                                className='form-control'
                            >
                                <option disabled>Account...</option>
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
                            <Button className='trans-sub-btn'>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Formik>
        </CardBody>
    )
}

export default IncomeForm