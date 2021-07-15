import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../assets/navBrand.png'

const Login = (props) => {
    return ( 
        <>
        <Modal
      {...props}
      size="sm"
      style={{"text-align":"center"}}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <div className="p-4" id= "nav-brand" style={{"fontSize":"30px"}} >prep4<span style={{ "fontSize":"30px"}} className="span">PM</span><img src={logo} style={{width:40, marginTop: -7}} /></div>
        <div  className="p-1"><input  type="email" placeholder="Enter email" /></div>
        <div   className="p-1"><input type="password" placeholder="Password" /></div>
        <div  className="p-3"  ><Button style={{ "minWidth": "180px"}} id= "btn-practice" onClick={props.onHide}>Login</Button></div>
        <Link to="/signup">Register</Link>
        <div className="p-3 " style={{ "fontSize":"10px"}} >*Privacy & Security Terms*</div>
    </Modal>
    </>
    )
}

export default Login;
