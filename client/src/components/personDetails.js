import { useEffect,useState} from "react";
import React, { Component } from 'react';
import { Button,Accordion,Card,Form } from 'react-bootstrap';
function PersonDetails(){
    const [open, setOpen] = useState(false);
useEffect(()=>{
    console.log('location ',window.location);
})    
return (

    <Accordion defaultActiveKey="0">
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Patient Deatils!
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>Hello! I'm the body</Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          Upload Report!
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body>
            <div>
        
  <div className="mb-3">
  <form>
      <input type="file" id="file" multiple name="file" />
      <button type="submit" className="btn btn-info"> Update File </button>
    </form>

  </div>

            </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
   
  );
}


export default PersonDetails;