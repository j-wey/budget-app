import { useState } from 'react'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
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
        <Accordion open={open} toggle={toggle}>
            <AccordionItem>
                <AccordionHeader targetId="1">Add Expense</AccordionHeader>
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
    )
}

export default TransactionAccordion