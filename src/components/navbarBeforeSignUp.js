import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import {useState}  from 'react';
import Login from '../screens/login';

function NavbarBeforeSignUp() {
    let [popUp, setPopUp] = useState(false);
    //const [modalShow, setModalShow] = React.useState(false);
    return (

        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand id= "nav-brand"className ="NavBar-Brand" href="#">prep4<span className="span">PM</span></Navbar.Brand>
                    <div className="d-flex ml-auto pl-4" >
                        <Button id= "btn-practice" className=" btn m-2 primary" onClick={()=>setPopUp(true)} >Login</Button>
                        <Login
                            show={popUp}
                            onHide={()=> setPopUp(false)}
                        />
                        <Button id= "btn-outline"  className="btn m-2 primary bg-light" >Sign Up</Button>
                    </div>
            </Navbar>
        </div>
    )
}
export default NavbarBeforeSignUp;
