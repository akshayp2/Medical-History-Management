
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,NavDropdown,Navbar,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Navbar1()
{
    return(
<Navbar bg="light" expand="lg">
<Navbar.Brand href="#home">Medical History</Navbar.Brand>
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
    <Link to="/login" className="btn btn-primary">Login</Link>
  </Form>
</Navbar.Collapse>
</Navbar>
);}
export default Navbar1;