import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import logo from '../assets/navBrand.png'
function NavbarAfterSignUp() {
     const [state, setstate] = React.useState(true);

    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand id= "nav-brand"className ="NavBar-Brand" href="#">prep4<span className="span">PM</span><img src={logo} style={{width:70, marginTop: -7}} /></Navbar.Brand>
                    <div className="d-flex ml-auto pl-4" >
                        Hi
                        {/* image */}
                       
                    </div>
            </Navbar>
        </div>
    )
}
export default NavbarAfterSignUp;
