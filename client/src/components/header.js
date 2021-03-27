import {  Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
function Header(){
return (<Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Link to="/contact">Contact Us</Link>
          </Nav>
          <Form inline>
            <Link to="/login" className="btn btn-primary">Login</Link>
          </Form>
        </Navbar.Collapse>
</Navbar>);
}
export default Header;