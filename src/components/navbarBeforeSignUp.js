import React from 'react'
import {Navbar, Button} from 'react-bootstrap';
import {useState}  from 'react';
import Login from '../screens/login';
import logo from '../assets/navBrand.png'
import { useHistory } from "react-router-dom";

function NavbarBeforeSignUp() {
    let [popUp, setPopUp] = useState(false);
    const history = useHistory();
    
    return (

        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand id= "nav-brand"className ="NavBar-Brand" href="#">prep4<span className="span">PM</span><img src={logo} style={{width:70, marginTop: -7}} /></Navbar.Brand>
                    <div className="d-flex ml-auto pl-4" >
                        <Button id= "btn-practice" className=" btn m-2 primary" onClick={()=>setPopUp(true)} >Login</Button>
                        <Login
                            show={popUp}
                            onHide={()=> setPopUp(false)}
                        />
                        <Button id= "btn-outline"  className="btn m-2 primary bg-light" onClick={()=>history.push('/signup')}>Sign Up</Button>
                    </div>
            </Navbar>
        </div>
    )
}
export default NavbarBeforeSignUp;
