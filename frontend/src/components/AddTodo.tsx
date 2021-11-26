import React from "react";

const AddTodo = () => {
  return (
    <form className="Form">
     
      <div>
        <div>
          <label htmlFor="title">Title</label>
          <input onChange={() => {}} type="text" id="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={() => {}} type="text" id="description" />
        </div>
      </div>
      <button>ADD TODO</button>
    </form>
  );
};

export default AddTodo;
