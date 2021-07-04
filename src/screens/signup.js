import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import signUpImage from '../assets/signupPage.png'

const Signup = (props) => {
    return ( 
        <div className="row" style={{"text-align":"center"}}>
          <div className="p-4 side" id= "nav-brand" style={{"text-align":"center", "fontSize":"30px"}} >
             <img src={signUpImage} alt="Sign Up Page"></img>
          </div>

          <div  className="main">
            <div style={{"text-align":"center"}} className="p-1">
              <label for="name" className="pr-4">*Name</label>
              <input  type="email" id="name" />
            </div>
          <div style={{"text-align":"center"}} className="p-1">
              <label for="email" className="pr-4">*Email</label>
              <input  type="email" id="email" />
            </div>
            <div style={{"text-align":"center"}} className="p-1">
              <label for="Education" className="pr-4">*Education Qualification</label>
              <input  type="email"  id="Education" />
            </div>
            <div style={{"text-align":"center"}} className="p-1">
              <label for="Designation" className="pr-4">*Current Designation</label>
              <input  type="email" id="Designation" />
            </div>
            <div style={{"text-align":"center"}} className="p-1">
              <label for="Organization" className="pr-4">*Current Organization</label>
              <input  type="email" id="Organization" />
            </div>
            <div style={{"text-align":"center"}} className="p-1">
              <label for="email" className="pr-4">*Email</label>
              <input  type="email"  id="email" />
            </div>
            <div style={{"text-align":"center"}} className="p-1">
              <label for="Domain" className="pr-4">*Domain</label>
              <input  type="email" id="Domain" />
            </div>
            <div style={{"text-align":"center"}} className="p-1">
              <label for="Skills" className="pr-4">*Skills</label>
              <input  type="email" id="Skills" />
            </div>
            <div style={{"text-align":"center"}} className="p-1">
              <label for="Experience" className="pr-4">*Total Experience</label>
              <input  type="email" id="Experience" />
            </div>
            <div style={{"text-align":"center"}} className="p-1">
              <label for="Domain" className="pr-4">*Domain</label>
              <input  type="email" id="Domain" />
            </div>
            <div style={{"text-align":"center"}} className="p-1">
              <label for="Password" className="pr-4">*Password</label>
              <input  type="email" id="Password" />
            </div>
            <div style={{"text-align":"center"}} className="p-1">
              <label for="Retype Password" className="pr-4">*Retype Password</label>
              <input  type="email" id="Retype Password" />
            </div>
          <div  className="p-3" style={{"text-align":"center"}} >
            <Button style={{ "minWidth": "180px"}} id= "btn-practice" onClick={props.onHide}>
              Sign Up
            </Button>
          </div>
          <div className="p-3 " style={{"text-align":"center", "fontSize":"10px"}} >
            *Privacy & Security Terms*
          </div>
        </div>
      </div>
    )
}

export default Signup
