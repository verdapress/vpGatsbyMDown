import React from "react";
import {Card, Button} from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const Post = () =>(
    <Card>
  <Card.Img variant="top"></Card.Img> <StaticImage
      src="../images/vpLogo.png"
      width={10}
      height={50}
    />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
);

export default Post;