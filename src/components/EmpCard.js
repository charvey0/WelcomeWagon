import React from 'react';
import { Card, Row } from 'react-bootstrap';
import './empcard.css';

function EmpCard(props) {
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const dob = new Date(props.dob);
    const bday = `${months[dob.getMonth()]} ${dob.getDate()}`
    return(
    <Card className="shadow p-3 mb-5 bg-white rounded">
        <img src={props.image} alt="Employee"/>
        
        <Card.Body>
            <Card.Title>
              {props.first} {props.last}
            </Card.Title>
            <Row>
              <b>Address:</b>  
              {props.streetnum} {props.street}<br />
              {props.city}, {props.state} <br />               
              {props.zip}
            </Row>          
            <Row>
              <b>Birthday:</b>
                {bday}
             </Row>

            <Row>
              <b>Email:</b> 
                {props.email}<br />
             <b>Phone:</b> 
                {props.phone}
            </Row>
        </Card.Body>
    </Card>
)

}

export default EmpCard;
