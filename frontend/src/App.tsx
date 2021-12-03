import React, { useState, FormEvent } from "react";

import myTodo from "./type";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

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

  const [searchTitle, setSearchTitle] = useState("");
  const [searchReasults, setSearchResults] = useState<myTodo[]>([]);

  const [subStatus, setSubStatus] = useState(false);

  const editItem = (id: string) => {
    const newEditItem: any = todo.find((elem) => {
      return elem._id === id;
    });
    setText(newEditItem);
    setToggleSubmit(false);
  };

  const searchHandler = (searchTerm: any) => {
    setSearchTitle(searchTerm);
    if (searchTerm !== "") {
      const newTodoList: any = todo.filter((todos) => {
        return Object.values(todos)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newTodoList);
    } else {
      setSearchResults(todo);
    }
  };

  if (subStatus) {
    return <App />;
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <AddTodo
        toggleSubmit={toggleSubmit}
        text={text}
        setText={setText}
        initialValues={initialValues}
        setSubStatus={setSubStatus}
      />
      <TodoItem
        setTodo={setTodo}
        todo={searchTitle.length < 1 ? todo : searchReasults}
        editItem={editItem}
        searchTitle={searchTitle}
        searchHandler={searchHandler}
      />
    </div>
  );
};

export default App;
