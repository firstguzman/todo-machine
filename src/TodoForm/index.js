import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

export const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Type your new ToDo</label>
      <textarea
        placeholder="Cut onion for dinner"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};
