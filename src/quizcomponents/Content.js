import React from "react";
import { Card } from "react-bootstrap";

const Content = ( { content } ) => (

    <Card>
        <Card.Body>{ content }</Card.Body>
    </Card>

)

export default Content;