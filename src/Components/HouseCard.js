import React from "react";
import { Card, CardBody } from "reactstrap";


const HomeCard = props => (


    <Card>
        <CardBody>
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <img src={props.image} alt="" height="200" />
        </CardBody>
    </Card>




)

export default HomeCard;