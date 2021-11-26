import React from "react";
import AddTodo from "./components/AddTodo";

import TodoItem from "./components/TodoItem";
function App() {
  return (
    <div className = 'App'>
      <h1>MY TODOS</h1>
      <AddTodo />
      <TodoItem />
    
    </div>
  );
}

export default App;
