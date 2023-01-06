import React from "react";
import "./TodoLoading.css";

export const TodoLoading = () => {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Loading ToDos...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
};
