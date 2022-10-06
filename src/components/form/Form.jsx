import { useState } from "react";
import "./style.css";

function Form({ todo, setTodo }) {
  return (
    <form
      className="addForm"
      onSubmit={function (event) {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const body = form.body.value;

        setTodo([
          ...todo,
          {
            id: todo.length,
            title: title,
            body: body,
            isDone: false,
          },
        ]);
      }}
    >
      <div className="inputGroup">
        <label className="formLabel">제목</label>
        <input type="text" name="title" className="addInput inputBody" />
        <label className="formLabel">내용</label>
        <input type="text" name="body" className="addInput" />
      </div>
      <button type="submit" className="addButton">
        추가하기
      </button>
    </form>
  );
}

export default Form;
