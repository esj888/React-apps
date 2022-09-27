import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //   const expenseDate = new Date(2022, 7, 21);
  //   const expenseTitle = "iPhone 14";
  //   const expenseAmount = 1099.0;

  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
