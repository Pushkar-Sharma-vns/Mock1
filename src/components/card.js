import React from 'react'
import image from '../assets/PM.jpg';
import Button from 'react-bootstrap/Button';
const Card = (props) => {
    return (
        <div>
            <div id="card" className="p-1" >
            <div className="p-1">
                {/* image */}
                <img id="mentor-img" src={image} alt="Avatar"/>
            </div>
            <div  style={{"fontWeight":"bold"}}>
                {props.name}
            </div>
            <div  style={{color:"#808080",  "fontSize":"13px"}}>
                <div>{props.company}</div>
                <div>{props.experience}</div>
                <div>{props.rating}</div>
                <div>{props.sessions}</div>
                <div>{props.price}</div>
            </div>
        </div>
        <div  className="btn sm p-2" >
        <Button id="btn-practice" style={{"padding": "3px 10px"}} >Book</Button>
        </div>
        </div>
    )
}

export default Card
