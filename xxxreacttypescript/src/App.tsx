import React from "react";
import TodoList from "./Components/TodoList";
import NewTodo from "./Components/NewTodo";

function App() {
  const todos = [{ id: "t1", text: "finish the course" }];

  return (
    <div>
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
