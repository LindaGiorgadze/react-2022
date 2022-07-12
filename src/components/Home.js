import { useState } from "react";
import Bootstrap from "./Bootstrap";
import Button from "./Button";
import CounterClass from "./CounterClass";
import CounterParent from "./CounterParent";
import CounterUseReducer from "./CounterUseReducer";
import Form from "./Form";
import Registration from "./Registration";
import TodoApp from "./TodoApp";

export default function Home() {
  const [initialValue, setInitialValue] = useState(0);
  const btnTexts = [
    {
      id: 1,
      text: "Button 1"
    },
    {
      id: 2,
      text: "Button 2"
    },
    {
      id: 3,
      text: "Button 3"
    },
    {
      id: 4,
      text: "Button 4"
    }
  ];
  return (
    <div>
      {/* <Button onClick={() => setInitialValue(initialValue+5)} text='Change Initial Value'/>
      <CounterClass initialNumber={initialValue} /> */}
      {/* <Registration />
      <CounterUseReducer /> */}
      {/* <Bootstrap />
      {btnTexts
        .filter((object) => object.id < 4)
        .map((item) => {
          return <Button key={item.id} text={item.text} />;
        })}
      <Form />
      <CounterParent /> */}
      <TodoApp />
    </div>
  );
}
