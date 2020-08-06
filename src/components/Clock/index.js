import React, { Component } from "react";
import { Badge } from "reactstrap";

class Clock extends Component {
  constructor(props) {
    console.log("1. constructor");
    super(props);
    this.state = {
      initialDate: new Date().toLocaleTimeString(),
      date: new Date().toLocaleTimeString(),
      color: "warning",
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
  }
  render() {
    console.log("render", this.state.date);
    return (
      <>
        <h1>
          <Badge color={this.state.color}> {this.state.date} </Badge>
        </h1>
      </>
    );
  }
}

export default Clock;
