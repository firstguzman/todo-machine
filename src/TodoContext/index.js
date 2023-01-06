import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedToDos = toDos.filter((toDo) => !!toDo.completed).length;
  const totalToDos = toDos.length;

  let searchedToDos = [];

  if (!searchValue.length >= 1) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter((todo) => {
      const toDoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newToDos = [...toDos];
    newToDos.push({
      text,
      completed: false,
    });
    saveToDos(newToDos);
  };

  const completeTodo = (text) => {
    const todoIndex = toDos.findIndex((todo) => todo.text === text);
    const newToDos = [...toDos];
    newToDos[todoIndex].completed = true;
    saveToDos(newToDos);
  };

  const deleteTodo = (text) => {
    const todoIndex = toDos.findIndex((todo) => todo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(todoIndex, 1);
    saveToDos(newToDos);
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedToDos,
        totalToDos,
        searchValue,
        setSearchValue,
        searchedToDos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
