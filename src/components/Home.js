import Bootstrap from "./Bootstrap";
import Button from "./Button";
import CounterParent from "./CounterParent";
import Form from "./Form";
import TodoApp from "./TodoApp";

export default function Home() {
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
      <Bootstrap />
      {btnTexts
        .filter((object) => object.id < 4)
        .map((item) => {
          return <Button key={item.id} text={item.text} />;
        })}
      <Form />
      <CounterParent />
      {/* <TodoApp /> */}
    </div>
  );
}
