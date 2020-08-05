import React, { Component } from "react";
import { Badge } from "reactstrap";

class ClassGreet extends Component {
  render() {
    return (
      <div>
        <p>
          Hola
          <Badge color="warning">
            {" "}
            {this.props.firstName} {this.props.lastName} Class Component
          </Badge>
        </p>
      </div>
    );
  }
}
export default ClassGreet;
