import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);  // must be called in component functions.

    const clickHandler = () => {
      setTitle('Updated!');   // pass new value to be updated. component function will execute again.
      console.log({title});   // variable title doesn't get updated right away.
  };

  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
