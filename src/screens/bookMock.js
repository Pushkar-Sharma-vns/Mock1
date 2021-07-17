import React from 'react'
import NavbarBrand from '../components/navbarBrand'
import Calendar from 'react-calendar'
import { Button } from 'react-bootstrap'
import CongratsPopup from './congratspopup'
import JSONDATA from '../assets/details.json'

const BookMock = () => {
    let [popUp, setPopUp] = React.useState(false);
    const [value, onChange] = React.useState(new Date());
    let [time, setTime] = React.useState("00:00");
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
        
        </div>
        <div className="col-6 pt-4" >
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
                <div><Button id= "btn-outline" onClick={()=>{setTime(time = "09:00")}} className="btn m-2 primary bg-light pt-0 pb-0" >09:00</Button></div>
                <div><Button id= "btn-outline" onClick={()=>{setTime(time = "18:00")}} className="btn m-2 primary bg-light pt-0 pb-0" >18:00</Button></div>
                <div><Button id= "btn-outline" onClick={()=>{setTime(time = "20:00")}} className="btn m-2 primary bg-light pt-0 pb-0" >20:00</Button></div>
            </div>
            <div className="col-6">
                <div><Button id= "btn-outline" onClick={()=>{setTime(time = "10:00")}} className="btn m-2 primary bg-light pt-0 pb-0" >10:00</Button></div>
                <div><Button id= "btn-outline" onClick={()=>{setTime(time = "19:00")}} className="btn m-2 primary bg-light pt-0 pb-0" >19:00</Button></div>
                <div><Button id= "btn-outline" onClick={()=>{setTime(time = "21:00")}} className="btn m-2 primary bg-light pt-0 pb-0" >21:00</Button></div>
            </div>     
          </div>
        </div>
        {console.log(time)}
        <div  className="p-5" >
        <Button style={{ "text-align":"center","minWidth": "180px"}} onClick={()=>setPopUp(true)} id= "btn-practice" >Schedule</Button>
        <CongratsPopup
           show={popUp}
           time = {time}
           value = {value.toDateString()}
           onHide={()=> setPopUp(false)}
        />
        </div>
        </div>
       
        </div>
        </div>
    )
}

export default BookMock
