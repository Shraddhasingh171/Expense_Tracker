import React from "react";
import './NewExpense.css';
import Expensefor from "./Expensefor";

const NewExpense=(props)=>{

    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        console.log(expenseData);
    };

    return(
        <div className='new-expense'>
             <Expensefor 
             onSaveExpenseData ={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;