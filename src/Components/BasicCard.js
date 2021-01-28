import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function BasicCard() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant='top' src='holder.js/100px100?text=Image cap' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href='#'>Link</Card.Link>
        <Card.Link href='#'>Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
export default BasicCard;
