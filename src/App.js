import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpenses/NewExpense.js";

let DUMMY_EXPENSE = [
  { id: "e1",   
    title: "School-Fee", 
    amount: 250, 
    date: new Date(2023, 5, 23) 
  },
  { id: "e2", 
    title: "House-Rent", 
    amount: 450, 
    date: new Date(2023, 5, 3) 
  },
  {
    id: "e3",
    title: "Electric-Bill",
    amount: 550,
    date: new Date(2023, 5, 19),
  },
  { id: "e4", 
    title: "Food-Bill", 
    amount: 650, 
    date: new Date(2023, 5, 8) 
  },
  { id: "e5", 
    title: "Books", 
    amount: 150, 
    date: new Date(2023, 5, 11) 
  },
  { id: "e6", 
    title: "Laundry", 
    amount: 750, 
    date: new Date(2023, 5, 1) 
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  
  const addExpenseHandler=(expense)=>{
    //console.log(expense);
    const updatedExpenses = [expense, ...expenses];
    setExpenses(updatedExpenses);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
