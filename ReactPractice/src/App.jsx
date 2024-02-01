import { useState , useCallback } from "react";
import Todos from "./Todos";

const App = () => {
  console.log("App");
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  // const addTodo = () => {
  //   console.log("addFun");
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  const addTodo = useCallback(() => {
    console.log("addFun");
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);
  console.log(todos)

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default App
