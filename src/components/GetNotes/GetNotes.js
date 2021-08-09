import React, { Component } from "react";
import { Card, Carousel, Button, Container } from "react-bootstrap";
import GetNotesCSS from "./GetNotes.module.css";

class GetNotes extends Component {
  render() {
    return (
      <div>
    <h1 className={GetNotesCSS.h1}>Previous Notes</h1>
        <Container className={GetNotesCSS.container}>
        <Carousel className={GetNotesCSS.carouselBackground}>
          <Carousel.Item>
            <Card style={{ width: "18rem" }} className={GetNotesCSS.card}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Previous post would go here</Card.Text>
                <Button className={GetNotesCSS.button}>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card style={{ width: "18rem" }} className={GetNotesCSS.card} >
                <Card.Title>Another Card</Card.Title>
                <Card.Text>Previous post would go here</Card.Text>
                <Button className={GetNotesCSS.button}>Go somewhere</Button>   
            </Card>
          </Carousel.Item>
        </Carousel>
        </Container>
      </div>
    );
  }
}

export default GetNotes;
