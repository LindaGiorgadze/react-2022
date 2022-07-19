import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import TodoItem from "./TodoItem";
import apiRequest from "../apiRequest";
import UseRequest from "../hooks/useRequest";

export default function NewTodoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const input = useRef();

  const data = UseRequest("", "get");

  useEffect(() => {
    setTodoItems(data);
  }, [data]);

  useEffect(() => {
    input.current.focus();
  }, [todoItems]);

  function handleSubmit(e) {
    e.preventDefault();
    let todoItem = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    setInputValue("");
    setTodoItems([todoItem, ...todoItems]);
    apiRequest("/create", "POST", { text: inputValue }).then((response) =>
      console.log(response)
    );
  }

  function checking(id) {
    const changedArray = todoItems.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoItems(changedArray);
  }

  return (
    <div className="Counter">
      <h3>New Todo App</h3>
      <form onSubmit={handleSubmit}>
        <Input
          ref={input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit" text="Add Item" />
      </form>

      <ul className="ul">
        {todoItems?.map((item, index) => {
          return (
            <TodoItem
              key={index}
              completed={item.completed}
              id={item.id}
              text={item.text}
              onChangePassed={checking}
            />
          );
        })}
      </ul>
    </div>
  );
}
