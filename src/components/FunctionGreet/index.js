import React from "react";
import { Badge } from "reactstrap";

function FunctionGreet({ firstName, lastName }) {
  return (
    <div>
      <p>
        Hola
        <Badge color="danger">
          {" "}
          {firstName} {lastName} Functional Component
        </Badge>
      </p>
    </div>
  );
}

export default FunctionGreet;
