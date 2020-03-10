import React, { Component } from "react";
<<<<<<< HEAD
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

export default class Home extends Component {
    apicall = () => {

    }
    render() {
        return (

<CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
=======

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Home extends Component {
    apicall = () => {

    }
    render() {
        return (
<Row className="justify-content-md-center">
<Col xs lg="12">
      
    
  <Card bg="primary" text="white" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
     <Card.Body>
       <Card.Title>Primary Card Title</Card.Title>
       <Card.Text>
         Some quick example text to build on the card title and make up the bulk
         of the card's content.
       </Card.Text>
    </Card.Body>
  </Card>
</Col>
    
    </Row>
>>>>>>> 3ac3343d5e527c4a5ba7f1fea6d8327d9c23f32c
        );
        }
    }
        