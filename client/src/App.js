import './App.css';
import { Button,Navbar,Nav,NavDropdown,Form,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react"; 
import Login from './component/login';

import RadioButtons from './component/RadioButton';

function App() {
  const [showModel,setshowModel ]=useState(false);
  return (<div>
     <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        
        <Button variant="primary" onClick={()=>setshowModel(true)}>Login</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>

  <Modal show={showModel} onHide={()=>setshowModel(false)}>
  <Modal.Header closeButton>
    <Modal.Title></Modal.Title>
  </Modal.Header>

  <Modal.Body>
   <Login></Login>
   <RadioButtons></RadioButtons>
  </Modal.Body>
    
  <Modal.Footer>
    <Button variant="secondary" onClick={()=>setshowModel(false)}>Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
 
</Modal>

    </div>
     );
}

export default App;
