import "../components/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-tabs">
      <ExpenseDate date={props.date} />
      <div className="expense-title">{props.title}</div>
      <div className="expense-price">{props.price}</div>
    </div>
  );
}

export default ExpenseItem;
