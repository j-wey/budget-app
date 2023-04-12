import { useState } from 'react'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Card
} from 'reactstrap'
import ExpenseForm from './expenses/ExpenseForm'
import IncomeForm from './incomes/IncomeForm'

const TransactionAccordion = () => {
    const [open, setOpen] = useState('')
    const toggle = (id) => {
        if (open === id) {
            setOpen()
        } else {
            setOpen(id)
        }
    }

    return (
        <Card
            className='my-2'
            color='dark'
            inverse
            >
        <Accordion open={open} toggle={toggle} className='transInputForm'>
            <AccordionItem>
                <AccordionHeader targetId="1" className='transInputHeader'>Add Expense</AccordionHeader>
                <AccordionBody accordionId="1">
                    <ExpenseForm />
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="2">Add Income</AccordionHeader>
                <AccordionBody accordionId="2">
                    <IncomeForm />
                </AccordionBody>
            </AccordionItem>
        </Accordion>
        </Card>
    )
}

export default TransactionAccordion