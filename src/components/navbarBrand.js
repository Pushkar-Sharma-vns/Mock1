import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import logo from '../assets/navBrand.png'

const NavbarBrand = () => {
    const [state, setstate] = React.useState(true);

    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand className ="NavBar-Brand" href="#"><img src={logo} style={{width:50, marginTop: -7}} /></Navbar.Brand>
                    <div className="d-flex ml-auto pl-4" >
                        Hi
                        {/* image */}
                       
                    </div>
            </Navbar>
        </div>
    )
}

export default NavbarBrand;
