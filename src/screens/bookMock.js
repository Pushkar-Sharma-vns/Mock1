import React from 'react'
import NavbarBrand from '../components/navbarBrand'
import Calendar from 'react-calendar'
import { Button } from 'react-bootstrap'

const BookMock = () => {
    const [value, onChange] = React.useState(new Date());
    return (
        <div className="pt-2 pl-5 pr-5 pb-4" id="book-interview">
        
        <div>
            <NavbarBrand/>
        </div>
        <div className="row">
       
        <div className="col-6">
        <div className= "heading-starting pt-4 pl-4" style={{"color":"black", "font":"Poppins"}}>
            Book a Mock Interview
        </div>
        <div className ="pl-3">
           <Calendar 
                onChange={onChange}
                value={value}
           />
        </div>
        {/* timing */}
        <div id="set-time" >
        <div style={{"textAlign":"center", borderBottom:" 1px solid #7B61FF", backgroundColor:"#d1c9f7", borderTopRightRadius:"8px", borderTopLeftRadius:"8px", padding:"8px"}}>
          <div style={{"fontSize":"13px"}}>
            Time slots Available
          </div>
          <div style={{"color":"rgb(28, 134, 35)", "fontSize":"15px" ,"fontWeight":"bold"}}>
           {value.toDateString()}
          </div>
        </div>
          <div className="row pt-1 pl-2 pb-2 pr-2">
            <div className="col-6">
                <div><Button id= "btn-outline"  className="btn m-2 primary bg-light pt-0 pb-0" >09:00</Button></div>
                <div><Button id= "btn-outline"  className="btn m-2 primary bg-light pt-0 pb-0" >18:00</Button></div>
                <div><Button id= "btn-outline"  className="btn m-2 primary bg-light pt-0 pb-0" >20:00</Button></div>
            </div>
            <div className="col-6">
                <div><Button id= "btn-outline"  className="btn m-2 primary bg-light pt-0 pb-0" >10:00</Button></div>
                <div><Button id= "btn-outline"  className="btn m-2 primary bg-light pt-0 pb-0" >19:00</Button></div>
                <div><Button id= "btn-outline"  className="btn m-2 primary bg-light pt-0 pb-0" >21:00</Button></div>
            </div>     
          </div>
        </div>
        </div>
        <div className="col-6" id ="detail-of-person">
            <div className= "heading-starting pt-4 pl-4" style={{"color":"black", "font":"Poppins", "text-align": "center"}}>
                Enter Details:
            </div>
            <div className="row">
                <div className="col-6">
                <div style={{ "text-align": "right" }} className="p-2">
                <label for="name" className="pr-4">*Name:</label>
              </div>
              <div style={{ "text-align": "right" }} className="p-2">
                <label for="email" className="pr-4">*Email:</label>
              </div>
              <div style={{ "text-align": "right" }} className="p-2">
                <label for="Phone-no." className="pr-4">*Phone No:</label>
              </div>
                </div>
                <div className="col-6">
                <div style={{ "text-align": "left" }} className="p-2 ">
                <input className="shadow" type="text" id="name" />
              </div>
              <div style={{ "text-align": "left" }} className="p-2">
                <input className="shadow" type="text" id="email" />
              </div>
              <div style={{ "text-align": "left" }} className="p-2">
                <input className="shadow" type="text" id="Phone-no." />
              </div>
                </div>
                
            </div>
            <div  className="p-4" style={{"text-align":"center"}} ><Button style={{ "minWidth": "180px"}} id= "btn-practice" >Save & Continue</Button></div>
        </div>
        </div>
        </div>
    )
}

export default BookMock
