import React from 'react'
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const Card = (props) => {
    const history = useHistory();
    return (
        <div className="item-container">
            <div id="card" key={props.id} className="p-1" >
                <div className="p-1">
                    {/* image */}
                    <img id="mentor-img" src={props.image} alt="Avatar" />
                </div>
                <div style={{ "fontWeight": "bold" }}>
                    {props.name}
                </div>
                <div style={{ color: "#808080", "fontSize": "13px" }}>
                    <div>{props.company}</div>
                    <div>{props.experience}</div>
                    <div>{props.domain}</div>
                    <div>{props.price}</div>
                </div>
            </div>
            <div className="btn sm p-2" >
                <Button id="btn-practice" style={{ "padding": "3px 10px" }} onClick={() => history.push('/bookMock')} >Book</Button>
            </div>
        </div>
    )
}

export default Card
