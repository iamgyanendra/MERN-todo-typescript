import React, { useEffect, useRef } from "react";

import TodoService from "../services/TodoServices";
import myTodo from "../type";

type Props = {
  setTodo: any;
  todo: myTodo[];
  editItem: (id: string) => void;
  searchTitle: string;
  searchHandler: any;
};

const TodoItem: React.FC<Props> = (props) => {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    retrieveTodo();
  }, []);

  const retrieveTodo = () => {
    TodoService.getAll()
      .then((response: any) => {
        props.setTodo(response.data.todo);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const deleteItem = (index: string) => {
    TodoService.remove(index);
    const deleteItems = props.todo.filter((elem) => {
      return index !== elem._id;
    });

    props.setTodo(deleteItems);
  };
  const getSearchTerm = () => {
    props.searchHandler(inputEl.current?.value);
  };

  return (
    <div>
      <div>
        <input
          ref={inputEl}
          type="text"
          placeholder="Search by Title"
          value={props.searchTitle}
          onChange={getSearchTerm}
        />
        <button>Search</button>
      </div>

      <div>
        {props.todo.map((todos: myTodo) => (
          <div className="Card" key={todos._id}>
            <div className="card-text">
              <h2>{todos.name}</h2>
              <span>{todos.description}</span>
            </div>
            <div className="card-button">
              <button onClick={() => props.editItem(todos._id)}>Edit</button>
              <button onClick={() => deleteItem(todos._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoItem;
