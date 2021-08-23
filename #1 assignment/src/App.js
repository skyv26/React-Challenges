import ExpenseItem from "./components/ExpenseItem";

const dataArray = [
  {
    date: new Date(2021, 7, 31),
    title: "Toilet Paper",
    price: "$250.41",
  },
  {
    date: new Date(2019, 1, 15),
    title: "New TV",
    price: "$550.75",
  },
  {
    date: new Date(2020, 12, 3),
    title: "Refrigenrator",
    price: "$750.45",
  },
];

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem date={dataArray[0].date} title={dataArray[0].title} price={dataArray[0].price} />
      <ExpenseItem date={dataArray[1].date} title={dataArray[1].title} price={dataArray[1].price} />
      <ExpenseItem date={dataArray[2].date} title={dataArray[2].title} price={dataArray[2].price} />
    </div>
  );
}

export default App;
