import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'

const Login = (props) => {
    return ( 
        <>
        <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <div className="p-4" id= "nav-brand" style={{"text-align":"center", "fontSize":"30px"}} >prep4<span style={{ "fontSize":"30px"}} className="span">PM</span></div>
 
        <div style={{"text-align":"center"}} className="p-1"><input  type="email" placeholder="Enter email" /></div>
        <div  style={{"text-align":"center"}} className="p-1"><input type="password" placeholder="Password" /></div>
        <div  className="p-3" style={{"text-align":"center"}} ><Button style={{ "minWidth": "180px"}} id= "btn-practice" onClick={props.onHide}>Login</Button></div>
        <div className="p-3 " style={{"text-align":"center", "fontSize":"10px"}} >*Privacy & Security Terms*</div>
    </Modal>
    </>
    )
}

export default Login
