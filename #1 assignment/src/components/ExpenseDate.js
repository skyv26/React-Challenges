import "../components/ExpenseItem.css";

function ExpenseDate(props) {
  const Date=props.date;
  const month = Date.toLocaleString("en-US", { month: "long" });
  const date =  Date.toLocaleString("en-US", { day: "2-digit" });
  const year =  Date.getFullYear();

  return (
    <div className="expense-date--style">
      <div className="month"> {month} </div>
      <div className="year"> {year} </div>
      <div className="date"> {date} </div>
    </div>
  );
}

export default ExpenseDate;
