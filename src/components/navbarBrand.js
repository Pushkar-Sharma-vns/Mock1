import React from 'react'
import {Navbar, Button, DropdownButton, Dropdown} from 'react-bootstrap';

import logo from '../assets/navBrand.png'

const NavbarBrand = () => {
  
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand className ="NavBar-Brand" href="#"><img src={logo} style={{width:50, marginTop: -7}} /></Navbar.Brand>
                    <div className="d-flex ml-auto pl-4" >
                    <span className="pr-2">Hi</span>
                    {/* image */}
                    <DropdownButton
                        style={{"paddingRight":"10px"}}
                        menuAlign="right"
                        variant="outline-secondary"
                        id="dropdown-menu-align-right"
                    >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Item eventKey="4"><Button style={{ "minWidth": "180px"}} id= "btn-practice">Logout</Button></Dropdown.Item>
                    </DropdownButton>
                    </div>
            </Navbar>
        </div>
    )
}

export default NavbarBrand;
