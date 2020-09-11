import React from "react";
import { MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";


function Heading(){
    return(
        <div>
        <div className="bg"> 
        <div className="container">   
         
        <h1>Unsplash</h1>
        <p className="upper">Beautiful,free photos.</p>
        <p className="lower">Gifted by the world's most generous community of photographers.</p>
        <div className="searchbar"> 
            <MDBCol md="6">
            <MDBFormInline className="md-form">
            <MDBBtn type="submit">
            <MDBIcon icon="search" />
            </MDBBtn>
            <input className="form-control form-control-bg ml-2 w-400" type="text" placeholder="Search free high-resolution photos" aria-label="Search" />
            </MDBFormInline>
            </MDBCol>
        </div>
        </div> 
        </div>
        </div>
    );
}

export default Heading;