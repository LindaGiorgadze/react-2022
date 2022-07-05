import { Button } from "react-bootstrap";

export default function Bootstrap() {
  const variants = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark"
  ];

  return (
    <section>
      <h3>Bootstrap Styles</h3>
      <div className="container-xxl bootstrapDiv"></div>
      {
        variants.map((item, index)=> {
            return (
                <Button key={index} variant={item}>{item}</Button>
            )
        })
      }
    </section>
  );
}
