import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import TodoItem from "./TodoItem";

const _todoItems = [
  { id: 1, text: "Text 1", completed: true },
  { id: 2, text: "Text 2", completed: false },
  { id: 3, text: "Text 3", completed: true }
];

export default function TodoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState(_todoItems);
  const input = useRef();

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
      <h3>Todo App</h3>
      <form onSubmit={handleSubmit}>
        <Input ref={input} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Button type="submit" text="Add Item" />
      </form>

      <ul className="ul">
        {todoItems.map((item, index) => {
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
