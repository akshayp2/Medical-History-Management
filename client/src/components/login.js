import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
    const [showModel, setshowModel] = useState(true);
    const [isAdhaar, setIsAdhaar] = useState(true);
    const [radioSelected, setRadioSelected] = useState('Patient');
    const [userDetails,setUserDetails] = useState({'isPatient':true,'adhaarNumber':'','email':'','password':''});
    // console.log('login')
    let handleChange = e =>{
        // console.log('event on field',e.target.name)
        let name = e.target.name
        setUserDetails(prevState=>({
            ...prevState,
            [name]:e.target.value
        }));
    }
    let handleChangeRadio = e => {
        let isPatient = e.target.value =='Clinic'?false:true;
        console.log('isPatient ',isPatient);
        setRadioSelected(e.target.value);
        isPatient==true?setIsAdhaar(true):setIsAdhaar(false);
        setUserDetails({'isPatient':isPatient,'adhaarNumber':'','email':'','password':''});
    }
    let handleLogin = e => {
        console.log('UserDetails ',userDetails);
        // current changes
        if(userDetails.adhaarNumber=='123' && userDetails.password=='abc'){

        }else{

        }
    }
    return (
        <div>
            <Modal show={showModel} onHide={() => {
                setshowModel(false)
                window.location.replace('/');
                }}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div className="form-group" hidden={isAdhaar}>
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" name="email" value={userDetails.email} onChange={handleChange}/>
                        </div>
                        <div className="form-group" hidden={!isAdhaar}>
                            <label>Adhaar Number</label>
                            <input type="text" className="form-control" placeholder="Enter Adhaar Number" name="adhaarNumber" value={userDetails.adhaarNumber} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" name="password" value={userDetails.password} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        
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
                                onChange={handleChangeRadio} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Patient</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                checked={radioSelected === "Clinic"}
                                id="inlineRadio1"
                                className="form-check-input"
                                value="Clinic"
                                onChange={handleChangeRadio} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Clinic</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio"
                                checked={radioSelected === "Guest"}
                                className="form-check-input"
                                id="inlineRadio3"
                                value="Guest"
                                onChange={handleChangeRadio} />
                            <label className="form-check-label" htmlFor="inlineRadio3">Guest</label>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/register" className="register_link"> click here to register</Link>
                    <Link to="/" className="btn btn-secondary" onClick={() => setshowModel(false)}>Close</Link>
                    <Button variant="primary" onClick={handleLogin}>Login</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Login;