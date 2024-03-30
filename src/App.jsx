import { useEffect, useState } from 'react';
import './App.css'
import { ExpenseContext } from './components/context/ExpenseContext'
import InputArea from './components/InputArea';
import ExpenseItem from './components/ExpenseItem';
function App() {
  const [expensesList, setExpensesList] = useState([]);
  const [inputField, setInputField] = useState(true)
  const [calculate, setCalculate] = useState("")
  const [isPopVisible, setIsPopVisible] = useState(false);
  const addExpense = (newExpense) => {
    console.log(newExpense)
    setExpensesList((prev) => ([{ id: Date.now(), ...newExpense }, ...prev]))
  }

  const removeExpense = (id) => {
    console.log(id)
    setExpensesList((prev) => (prev.filter(preExpense => preExpense.id != id)))
  }

  const updateAmountInList = () => { }
  const updateCategoryInList = () => { }
  const updateTitleInList = () => { }
  useEffect(() => {
    let expenses = JSON.parse(localStorage.getItem("data"));
    if (expenses && expenses.length > 0)
      setExpensesList(expenses);
  }, [])

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(expensesList))
  }, [expensesList])

  const handleMenu = () => {
    () => setInputField(!inputField)
    setCalculate(expensesList.reduce((acc, item) => acc + parseInt(item.amount), 0));
    setIsPopVisible(true);
        setTimeout(() => {
            setIsPopVisible(false);
        }, 2000);
  }

  return (
    <ExpenseContext.Provider value={{ setInputField, inputField, expensesList, addExpense, removeExpense, updateAmountInList, updateCategoryInList, updateTitleInList }}>
      <main className='flex flex-col justify-center items-center'>
        {isPopVisible && (
          <div className='border-2 px-4 py-1 absolute text-white top-20 right-20'>Total : {calculate}</div>
        )}
        <div className='absolute top-0 w-full container mt-5 m-auto'>
          {
            !inputField && (<div className=' px-3 flex justify-between
            '>
              <div
                onClick={() => setInputField(!inputField)}
                className='w-[40px] h-[40px] flex justify-center items-center rounded-full border-[2px]  border-white'>
                <i className="fa-solid fa-plus text-white"></i>
              </div>
              <div
                onClick={handleMenu}
                className='w-[40px] h-[40px] flex justify-center items-center rounded-full border-[2px]  border-white'>
                <p className='text-white text-xl font-bold'>C</p>
              </div>
            </div>)
          }
          {
            inputField && (
                <div
                  onClick={() => setInputField(!inputField)}
                  className='w-[40px] h-[40px] flex justify-center items-center rounded-full border-[2px]  border-white'>
                  <i className="fa-solid fa-list text-white"></i>
                </div>
            )
          }
        </div>
        <InputArea />
        <div className='flex flex-col'>
          {!inputField && <div className='w-[300px] mb-2 sm:w-[500px] rounded-lg h-[70%] text-white'>
            <div className='absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-medium sm:text-3xl'>Your Expenses</div>
            <div className='text-white flex items-center w-full py-2' style={{ backdropFilter: "blur(14px)" }}>
              <p className='w-28 sm:32 font-bold text-base'>Title</p>
              <p className='w-28 sm:32 font-bold text-base'>Category</p>
              <p className='w-28 sm:32 font-bold text-base'>Quantity</p>
              <p className='w-28 sm:32 font-bold text-base'>Amount</p>
            </div>
          </div>}
          {
            expensesList.map((item) => (
              <ExpenseItem key={item.id} value={item} />
            ))
          }
        </div>
      </main>
    </ExpenseContext.Provider >
  )
}

export default App
