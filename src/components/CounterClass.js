import React from "react";
import Button from "./Button";

class CounterClass extends React.Component {
  state = {
    number: this.props.initialNumber,
    title: "Counter with Class"
  };

  increase() {
    this.setState({
      number: this.state.number + 1
    });
  }

  decrease() {
    this.setState({
      number: this.state.number - 1
    });
  }

//   componentDidMount() {
//     interval = setInterval(() => {
//         this.setState({
//             number: this.state + 5
//         });
//         console.log(this.state);
//       }, 2000);
//   }
//   componentWillUnmount() {
//     clearInterval(interval);
//   }

  render() {
    return (
      <section>
        <h3>{this.state.title}</h3>
        <p>{this.state.number}</p>
        <Button 
            onClick={() => this.decrease()} 
            text="Decrease" 
        />
        <Button 
            onClick={() => this.increase()} 
            text="Increase" 
        />
      </section>
    );
  }
}

export default CounterClass;
