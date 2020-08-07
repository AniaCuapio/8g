import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function PostCard({ imgUrl, title, subtitle, body }) {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={imgUrl} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
          <CardText>{body}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}
export default PostCard;
