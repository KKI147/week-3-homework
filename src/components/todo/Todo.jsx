import { useEffect, useState } from "react";
import "./style.css";

function Todo({ todo, setTodo }) {
  const [cancel, setcancel] = useState(todo.isDone);

  const handleRemove = (id) => {
    setTodo((todo) => todo.filter((todo) => todo.id !== id));
    console.log(todo.id);
  };

  const toggleMenu = () => {
    setcancel(!cancel);
    todo.isDone = !todo.isDone;
  };

  useEffect(() => {
    console.log(todo);
  }, [cancel]);

  return (
    <div>
      <>
        <h2 className="listTilte">
          {todo.isDone === false ? "Working.." : "Done.."}
        </h2>
        <div className="listWrapper">
          <div>
            <h2 className="todoTitle">{todo.title}</h2>
            <div>{todo.body}</div>
          </div>
          <div className="buttonSet">
            <button
              onClick={() => handleRemove(todo.id)}
              className="todoDeleteButton button"
            >
              삭제하기
            </button>
            <button
              onClick={() => toggleMenu()}
              className="todoCompleteButton button"
            >
              {todo.isDone === false ? "완료" : "취소"}
            </button>
          </div>
        </div>
      </>
    </div>
  );
}

export default Todo;
