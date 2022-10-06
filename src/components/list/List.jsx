import { useState } from "react";
import "./style.css";
import Todo from "../todo/Todo";

function List({ todo, setTodo }) {
  return (
    <div className="List">
      {todo.map((todo) => (
        <Todo todo={todo} setTodo={setTodo} key={todo.id} />
      ))}
    </div>
  );
}

export default List;
