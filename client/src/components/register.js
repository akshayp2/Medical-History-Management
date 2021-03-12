import { Button,Modal} from 'react-bootstrap';
import React, { useState } from "react"; 
import {Link} from 'react-router-dom';
function Register(){
    const [showModel,setshowModel ]=useState(true);
    console.log('Form called')
        return (
            <Modal show={showModel} onHide={()=>setshowModel(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
            <form>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
            </form>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/login" className="register_link forgot-password text-right"> click here to login</Link>
                <Link to="/" className="btn btn-secondary" onClick={() => setshowModel(false)}>Close</Link>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
        );
}
export default Register;