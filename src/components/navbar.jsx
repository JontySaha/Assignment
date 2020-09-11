import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import imagecam from "../images/camera-solid.svg";
import imagebell from "../images/bell-solid.svg";
import imageuser from "../images/user-tie-solid.svg";
function Navigationbar(){
    return(
        <div>
            <Navbar bg="light">
            <Navbar.Brand href="#home">
            <img
                src={imagecam}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav">
            <div className="navigationalign">
            <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Collections</Nav.Link>
            <Nav.Link href="#link">Explore</Nav.Link>
            <Nav.Link className="navbutton" href="#link">. . .</Nav.Link>
            </Nav>
            </div>
            <Button variant="outline-secondary" className="topbutton">Submit a photo</Button>{' '}
             </Navbar.Collapse>
             <img
                src={imagebell}
                width="30"
                height="30"
                className="d-inline-block bellimg"
            />
            <img 
                src={imageuser}
                width="30"
                height="30"
                className="d-inline-block "
            />
            </Navbar>       
        </div>
    );
}

export default Navigationbar;