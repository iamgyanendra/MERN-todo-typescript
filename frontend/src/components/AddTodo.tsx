import React, { ChangeEvent, FormEvent } from "react";
import TodoService from "../services/TodoServices";
import myTodo from "../type";

type Props = {
  toggleSubmit: boolean;
  text: myTodo;
  setText: any;
  initialValues: any;
  setSubStatus: any;
};

const AddTodo: React.FC<Props> = (props) => {
  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.setText({ ...props.text, [e.target.name]: e.target.value });
  };

  const addTodo = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await TodoService.create(props.text);

      props.setText(props.initialValues);
     
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    TodoService.update(props.text._id, props.text)
      .then((response: any) => {
        console.log(response.data);
        console.log("The tutorial was updated successfully!");
        props.setSubStatus(true);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <form className="Form">
      {props.toggleSubmit ? (
        <>
          <div>
            <div>
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                id="title"
                required
                value={props.text.name}
                onChange={(e) => onValueChange(e)}
                name="name"
              />
            </div>
            <div>
              <label htmlFor="Description">Description</label>
              <input
                type="text"
                id="description"
                value={props.text.description}
                required
                onChange={(e) => onValueChange(e)}
                name="description"
              />
            </div>
          </div>

          <button onClick={(e) => addTodo(e)}>ADD TODO</button>
        </>
      ) : (
        <>
          <div>
            <div>
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                id="title"
                value={props.text.name}
                required
                onChange={(e) => onValueChange(e)}
                name="name"
              />
            </div>
            <div>
              <label htmlFor="Description">Description</label>
              <input
                type="text"
                id="description"
                required
                value={props.text.description}
                onChange={(e) => onValueChange(e)}
                name="description"
              />
            </div>
          </div>

          <button onClick={(e) => updateTodo(e)}>Edit TODO</button>
        </>
      )}
    </form>
  );
};

export default AddTodo;
