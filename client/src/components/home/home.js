import React, { Component } from "react";

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
        );
        }
    }
        