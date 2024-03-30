import React, { useContext } from 'react'
import { ExpenseContext } from './context/ExpenseContext'

const ExpenseItem = (Expense) => {
    const { removeExpense, inputField, expensesList } = useContext(ExpenseContext)
    console.log(Expense.value.title)
    const remove = () => {
        removeExpense(Expense.value.id)
    }
    return (

        !inputField && (
            <div className='w-[300px] sm:w-[500px] rounded-lg h-[70%] text-white' >
                <div className='w-full rounded-lg flex flex-col items-center mb-2 justify-center gap-2' style={{ backdropFilter: "blur(13px)" }}>
                    <div className='text-white flex items-center w-full py-[5px]' onClick={remove}>
                        <p className=' w-28 px-2'>{Expense.value.title}</p>
                        <p className=' w-28'>{Expense.value.category}</p>
                        <p className='w-28'>{Expense.value.quantity}</p>
                        <p className='w-28'>{Expense.value.amount}</p>
                    </div>
                </div>
            </div>
        )
    )
}

export default ExpenseItem