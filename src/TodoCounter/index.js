import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedToDos, totalToDos } = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      You have completed {completedToDos} of {totalToDos} TODOs
    </h2>
  );
}

export { TodoCounter };
