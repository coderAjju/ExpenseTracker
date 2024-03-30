import React from "react";

export const ExpenseContext = React.createContext({
    expensesList: [ // array of objects containing individual expenses information {id ,title, amount, category}
        {
            id:Date.now(),
            title:"Pizza",
            category:"food",
            amount:120
        },
    ],
    addExpense:()=>{},
    removeExpense:()=>{},
    updateTitleInList:()=>{},
    updateCategoryInList:()=>{},
    updateAmountInList:()=>{},

});

