import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
    const [showModel, setshowModel] = useState(true);
    const [isAdhaar, setIsAdhaar] = useState(true);
    const [radioSelected, setRadioSelected] = useState('Patient');
    console.log('login')
    return (
        <div>
            <Modal show={showModel} onHide={() => setshowModel(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div className="form-group" hidden={isAdhaar}>
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group" hidden={!isAdhaar}>
                            <label>Adhaar Number</label>
                            <input type="tect" className="form-control" placeholder="Enter Adhaar Number" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="forget#">password?</a>
                        </p>
                    </form>
                    <div>
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                checked={radioSelected === "Patient"}
                                className="form-check-input"
                                id="inlineRadio2"
                                value="Patient"
                                onChange={(e) => {
                                    setRadioSelected(e.target.value);
                                    setIsAdhaar(true);
                                }} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Patient</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                checked={radioSelected === "Clinic"}
                                id="inlineRadio1"
                                className="form-check-input"
                                value="Clinic"
                                onChange={(e) => {
                                    setRadioSelected(e.target.value);
                                    setIsAdhaar(false);
                                }} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Clinic</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                checked={radioSelected === "Guest"}
                                className="form-check-input"
                                id="inlineRadio3"
                                value="Guest"
                                onChange={(e) => {
                                    setRadioSelected(e.target.value);
                                    setIsAdhaar(true);
                                }} />
                            <label className="form-check-label" htmlFor="inlineRadio3">Guest</label>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/register" className="register_link"> click here to register</Link>
                    <Link to="/" className="btn btn-secondary" onClick={() => setshowModel(false)}>Close</Link>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Login;