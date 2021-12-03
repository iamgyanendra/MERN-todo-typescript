import React, { useState, useEffect, ChangeEvent } from "react";

import TodoService from "../services/TodoServices";
import myTodo from "../type";

type Props =  {
    setTodo:any
    todo:myTodo[]
    editItem:(id:string)=> void
}

const TodoItem: React.FC<Props> = (props) => {
  
  const [currentTodo, setCurrentTodo] = useState<myTodo[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [searchTitle, setSearchTitle] = useState<string>("");

  useEffect(() => {
    retrieveTodo();
  }, [props.todo]);



  const onChangeSearchTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
    console.log(searchTitle);
  };
  const retrieveTodo = () => {
    TodoService.getAll()
      .then((response: any) => {
        props.setTodo(response.data.todo);
        
      
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };



  
  const findByTitle = () => {
    TodoService.findByTitle(searchTitle)
      .then((response: any) => {
        props.setTodo(response.data);
        setCurrentTodo([]);
        setCurrentIndex(-1);
        console.log(response.data.todo);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

   // delete item
   const deleteItem = (index:string)=>{
    TodoService.remove(index)
    const deleteItems=props.todo.filter((elem)=>{
        return index !== elem._id
    })
    
    props.setTodo(deleteItems)
}


  return (
    <div>
      <div>
        <input
          placeholder="Search by Title"
          value={searchTitle}
          onChange={onChangeSearchTitle}
        />
        <button onClick={findByTitle}>Search</button>
      </div>

 

      <div>
        {props.todo.map((todos:myTodo) => (
          <div className="Card" key={todos._id}>
            <div className="card-text">
              <h2>{todos.name}</h2>
              <span>{todos.description}</span>
            </div>
            <div className="card-button">
              <button onClick={()=>props.editItem(todos._id)}>Edit</button>
              <button  onClick={()=> deleteItem(todos._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoItem;
