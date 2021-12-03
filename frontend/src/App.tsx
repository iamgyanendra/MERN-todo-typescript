import React, { useState, FormEvent } from "react";

import myTodo from "./type";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoService from "./services/TodoServices";

//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const App: React.FC = () => {
  const initialValues: myTodo = {
    name: "",
    description: "",
    status: false,
  };
  const [text, setText] = useState<myTodo>(initialValues); // data

  const [todo, setTodo] = useState<myTodo[]>([]); // sending
  const [toggleSubmit, setToggleSubmit] = useState(true); // edit button toggle

  // const editItem=async(id:string)=>{

  //   let newEditItem:myTodo | any = todo.find((elem)=>{
  //     return elem._id===id

  //   })
  //   //console.log(todo);

  //   setText(newEditItem)
  //   const response = await TodoService.update(id, text)
  //     setToggleSubmit(false)
  //     console.log(response);

  // }
 
  const editItem =  (id: string) => {
    
   const newEditItem:any = todo.find((elem) => {
      return elem._id === id;
    });
    setText(newEditItem)
    setToggleSubmit(false)

    
  };

  

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <AddTodo toggleSubmit={toggleSubmit} text={text} setText={setText} initialValues={initialValues} />
      <TodoItem setTodo={setTodo} todo={todo} editItem={editItem} />
    </div>
  );
};

export default App;
