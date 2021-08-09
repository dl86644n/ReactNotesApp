import React, { Component } from "react";
import { Card, Form } from "react-bootstrap";
import CreateNotesCSS from "./CreateNotes.module.css";

class CreateNotes extends Component {
  render() {
    return (
      <div>
        <form>
          <Card className={CreateNotesCSS.card}>
            <Card.Header>
              <Form.Label>Create a Note Here:</Form.Label>
            </Card.Header>
            <Card.Body>
              <Form.Control size="lg" as="textarea" placeholder="Type here" />
            </Card.Body>
          </Card>
        </form>
      </div>
    );
  }
}

export default CreateNotes;
