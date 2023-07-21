import React,{useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
//import Card from '../UI/Card';

const ExpenseItem=(props)=> {

  // const [newTitle, setNewTitle] = useState("");

  // const [title, setTitle] = useState(props.title);

  // const clickHandler =()=>{
  //   setTitle(newTitle);
  // }

  // const changeHandler=(event)=>{
  //   setNewTitle(event.target.value);
  // }

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__discription">
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <input type="text" value={newTitle} onChange={changeHandler} />
      <button type="button" onClick={clickHandler}>Change Title</button> */}
    </div>
  );
}

export default ExpenseItem;
