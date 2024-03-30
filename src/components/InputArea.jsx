import React, { useContext, useState } from 'react'
import { ExpenseContext } from './context/ExpenseContext'
const InputArea = () => {
    const [isPopVisible, setIsPopVisible] = useState(false);
    const [expense, setExpense] = useState({
        title: "",
        category: "",
        quantity: "",
        amount: ""
    })

    const updateState = (property, newValue) => {
        setExpense((prev) => (
            { ...prev, [property]: newValue }
        ))
    }

    const { addExpense, removeExpense , inputField,setInputField } = useContext(ExpenseContext)
    const add = () => {
        addExpense(expense);
        setExpense({
            title: "",
            category: "",
            quantity: "",
            amount: ""
        })
        setIsPopVisible(true);
        setTimeout(() => {
            setIsPopVisible(false);
        }, 1000);

        setInputField(!inputField)
    }

    return (
        inputField && (<div className='w-[300px] sm:w-[400px] rounded-lg h-[70%] text-white' style={{ backdropFilter: "blur(13px)" }}>
        <div className='w-full h-[100%] rounded-lg flex flex-col items-center justify-center gap-2'>
            <h1 className=' text-3xl font-bold'>Track Expenses</h1>
            <div className='flex flex-col font-semibold mt-5'>
                <label htmlFor="input-area">Title</label>
                <input
                    className='w-64 p-1 text-base bg-transparent border-[1px] border-white border-solid rounded-lg placeholder:font-thin placeholder:text-[#e6e9e8]'
                    value={expense.title}
                    onChange={(e) => updateState('title', e.target.value)}
                    type="text" placeholder='Enter Title' />
            </div>
            <div className='flex flex-col font-semibold '>
                <label htmlFor="input-area">Category</label>
                <input
                    className='w-64 p-1 text-base bg-transparent border-[1px] border-white border-solid rounded-lg placeholder:font-thin placeholder:text-[#e6e9e8]'
                    value={expense.category}
                    onChange={(e) => updateState("category", e.target.value)}
                    type="text" placeholder='Enter Category' />
            </div>
            <div className='flex flex-col font-semibold '>
                <label htmlFor="input-area">Quantity</label>
                <input
                    className='w-64 p-1 text-base bg-transparent border-[1px] border-white border-solid rounded-lg placeholder:font-thin placeholder:text-[#e6e9e8]'
                    value={expense.quantity}
                    onChange={(e) => updateState("quantity", e.target.value)}
                    placeholder='Enter Quantity' />
            </div>
            <div className='flex flex-col font-semibold'>
                <label htmlFor="input-area">Amount</label>
                <input
                    className='w-64 p-1 text-base bg-transparent border-[1px] border-white border-solid rounded-lg placeholder:text-[#e6e9e8] placeholder:font-thin'
                    value={expense.amount}
                    onChange={(e) => updateState("amount", e.target.value)}
                     placeholder='Enter Amount' />
            </div>
            <button id='btn' onClick={add} className='py-1 mt-5 px-5 text-xl border-[1px] border-white active:rounded-3xl'>Add</button>
            {
                isPopVisible && (
                    <div style={{ filter: "none" }} className=" absolute top-0 text-white py-2 px-4 text-xl rounded shadow">
                        Item Added!
                    </div>
                )
            }
        </div>
    </div>)
    )
}

export default InputArea