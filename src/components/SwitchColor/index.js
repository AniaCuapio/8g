import React, { Component } from "react";
import { Container, Row, Badge, Button, Col } from "reactstrap";

class SwitchColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleClickSwitch = this.handleClickSwitch.bind(this);
  }
  handleClickSwitch() {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  }

  render() {
    const { active } = this.state;
    const color = active ? "primary" : "secondary";
    return (
      <>
        <Container>
          <Row>
            <Col>
              <p>
                <Badge color={color}> Holi ahí </Badge>
              </p>
              <Button color="success" onClick={this.handleClickSwitch}>
                ¡ Change color !
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SwitchColor;
