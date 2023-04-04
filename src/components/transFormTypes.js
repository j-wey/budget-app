import { Field } from 'formik'

export const ExpFields = () => {
    return (
        <>
            <Field
                name='vendor'
                type='text'
                className='form-control'
            />
            <Field
                name='category'
                as='select'
                className='form-control'
            >
                <option>Housing</option>
                <option>Utilities</option>
                <option>Food</option>
                <option>Recreation</option>
                <option>Discretionary</option>
                <option>Savings</option>
            </Field>
            <Field
                name='account'
                as='select'
                className='form-control'
            >
                <option>Alaska Card</option>
                <option>Venture Card</option>
                <option>AmEx Card</option>
                <option>Chase Card</option>
                <option>Checking</option>
                <option>Savings</option>
            </Field>
        </>
    )
}

export const IncFields = () => {
    return (
        <>
            <Field
                name='source'
                type='text'
                className='form-control'
            />
            <Field
                name='category'
                as='select'
                className='form-control'
            >
                <option>Payroll</option>
                <option>Bonus</option>
                <option>Gift</option>
                <option>Reimbursement</option>
                <option>Tax Refund</option>
            </Field>
            <Field
                name='account'
                as='select'
                className='form-control'
            >
                <option>Checking</option>
                <option>Savings</option>
            </Field>
        </>
    )
}