import React, { Component } from "react";
import { Badge, Container, Button } from "reactstrap";

class Clock extends Component {
  constructor(props) {
    console.log("1. constructor");
    super(props);
    this.state = {
      initialDate: new Date().toLocaleTimeString(),
      date: new Date().toLocaleTimeString(),
      color: "warning",
      counter: 1,
    };
  }
  componentDidMount() {
    console.log("component did mount");
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });
    }, 1000);
    setTimeout(() => {
      this.setState({
        color: "danger",
      });
    }, 5000);

    //setTimeout8(() => console.log("holi"), 3000);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Me clickearon desde un método");
    let { counter } = this.state;
    counter = counter++;
    this.setState({ counter });
  }

  render() {
    console.log("contexto de render: ", this);
    console.log("render", this.state.date);
    return (
      <>
        <h1>
          <Badge color={this.state.color}> {this.state.date} </Badge>
        </h1>
        <Container>
          <p>{this.state.counter}</p>
          <Button onClick={() => console.log("onclick")}>Pusha-me</Button>
        </Container>
      </>
    );
  }
}

export default Clock;
