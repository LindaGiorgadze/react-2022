import React from "react";
import Button from "./Button";

let interval;

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

  componentDidUpdate(prevProps) {
    if (this.props.initialNumber !== prevProps.initialNumber) {
      this.setState({
        number: this.props.initialNumber
      })
    }
  }

  // componentDidMount() {
  //   interval = setInterval(() => {
  //       this.setState({
  //           number: this.state.number + 5
  //       });
  //       console.log(this.state.number);
  //     }, 2000);
  // }
  // componentWillUnmount() {
  //   clearInterval(interval);
  // }

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
