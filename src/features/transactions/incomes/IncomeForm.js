import { Formik, Form, Field } from 'formik'
import { Row, Col, Button, CardBody } from 'reactstrap'

const IncomeForm = () => {
    const handleSubmit = (values) => {

    }
    
    return (
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
                            className='form-control'
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
                            className='form-control'
                        />
                        <Button>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Formik>
    )
}

export default IncomeForm