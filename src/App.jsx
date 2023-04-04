import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  console.log(data, "this");
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}></List>
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          Clear all
        </button>
      </section>
    </main>
  );
}

// const App = () => {
//   return <h2>Birthday Reminder - Starter</h2>;
// };
export default App;
