import "./style.css";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";
import Todo from "../todo/Todo";
import { useEffect, useState } from "react";

function Layout() {
  //todo의 기본값
  const [todo, setTodo] = useState([
    // id, title, body, isDOne 4가지 key
    {
      id: 0,
      title: "리엑트",
      body: "공부하자",
      isDone: false,
    },
    {
      id: 1,
      title: "이게",
      body: "맞나",
      isDone: true,
    },
  ]);

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <div className="layOut">
      <Header />
      <Form todo={todo} setTodo={setTodo} />
      <List todo={todo} setTodo={setTodo} key={todo.id}>
        <Todo todo={todo} setTodo={setTodo} key={todo.id} />
      </List>
    </div>
  );
}

export default Layout;
