import React from 'react'
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap'


const Signup = () => {
  const history = useHistory();
    return ( 
      <div className="p-3">
        <div className="row pl-3" style={{"text-align":"center"}}>
          <div className=" col-4" >
          <div className="p-4" id= "nav-brand" style={{"text-align":"left", "fontSize":"60px"}} >prep4<span style={{ "fontSize":"60px"}} className="span">PM</span></div>            
          <div className="p-4"style={{"text-align":"left", "fontSize":"30px"}} >
          Become a Part of <strong>PM</strong> Community.
          </div>
          <img 
                    id="img-job-interview"
                    src="https://s3-alpha-sig.figma.com/img/87fa/312e/69c8f2d0a528eb1172538196ce43cd2b?Expires=1626652800&Signature=ddwmJhjWjhNajZ03a~diG5JYdZUT76-FHkIcxj~hz7R2KgSI-PT3d0vA5HlUMS3qbu~VTaqMQjgX7Ou4hSqTyYcObCzLuoqqQCPNLLTEneoHLFgDUNqxNI0EoJHf9RMg9E5pciCFsiR1fEMTwrWhpoXSBVAtVRXJ0nZSttrfMxRTCU0690ozCmHi0pqOdPG4H3lrtV-g71I4lGnGfsMRuqmWBaLDMJR2NKzzY56rzUbd4dIWefM2k9r-VRPOBeyATqqMsNBPFENoo8~ikZTr7CN0tzE7uVDPzBMmAQeevLskH3u1gxTYXovIJYRhHKh9dBjE0hqiiFeQS5d8ifbj0w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="signup image"
                    />
          </div>
          <div  className=" col-7 main shadow">
          <div className="row">
          <div className="col-6">
            <div style={{"text-align":"right"}} className="p-1">
              <label for="name" className="pr-4">*Name:</label>
            </div>
          <div style={{"text-align":"right"}} className="p-1">
              <label for="email" className="pr-4">*Email:</label>
            </div>
            <div style={{"text-align":"right"}} className="p-1">
              <label for="Education" className="pr-4">*Education Qualification:</label>
            </div>
            <div style={{"text-align":"right"}} className="p-1">
              <label for="Designation" className="pr-4">*Current Designation:</label>
            </div>
            <div style={{"text-align":"right"}} className="p-1">
              <label for="Organization" className="pr-4">*Current Organization:</label>
            </div>
            
            <div style={{"text-align":"right"}} className="p-1">
              <label for="Domain" className="pr-4">*Domain:</label>
              
            </div>
            <div style={{"text-align":"right"}} className="p-1">
              <label for="Skills" className="pr-4">*Skills:</label>
             
            </div>
            <div style={{"text-align":"right"}} className="p-1">
              <label for="Experience" className="pr-4">*Total Experience:</label>
            </div>
           
            <div style={{"text-align":"right"}} className="p-1">
              <label for="Password" className="pr-4">*Password:</label>
            </div>
            <div style={{"text-align":"right"}} className="p-1">
              <label for="Retype Password" className="pr-4">*Retype Password:</label>
            </div>
            </div>
            <div className="col-6">
            <div style={{"text-align":"left"}} className="p-1">
                 <input  type="text" id="name"/>
            </div>
          <div style={{"text-align":"left"}} className="p-1">
              <input  type="text" id="email" />
            </div>
            <div style={{"text-align":"left"}} className="p-1">
              <input  type="text"  id="Education" />
            </div>
            <div style={{"text-align":"left"}} className="p-1">
              <input  type="text" id="Designation" />
            </div>
            <div style={{"text-align":"left"}} className="p-1">
              <input  type="text" id="Organization" />
            </div>
           
            <div style={{"text-align":"left"}} className="p-1">
            
              <input  type="text" id="Domain" />
            </div>
            <div style={{"text-align":"left"}} className="p-1">
            
              <input  type="text" id="Skills" />
            </div>
            <div style={{"text-align":"left"}} className="p-1">
              
              <input  type="text" id="Experience" />
            </div>
            
            <div style={{"text-align":"left"}} className="p-1">
              
              <input  type="text" id="Password" />
            </div>
            <div style={{"text-align":"left"}} className="p-1">
              <input  type="text" id="Retype Password" />
            </div>
            </div>
            </div>
            <div className="pt-1 pl-3">
            <input type="checkbox"></input> I agree to the <a href="url">Terms</a> of use and  <a href="url">Privacy Policy.</a>
            </div>
          <div  className="pt-3" style={{"text-align":"center"}} >
            <Button style={{ "minWidth": "180px"}} id= "btn-practice" onClick={()=>history.push('/')}>
              Sign Up
            </Button>
            <a className="pl-2" href="url">Learn More</a>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Signup