// Create a component <Multiplier x={ 5 } y={ 7 } /> that takes two props, x and y, and outputs their product (i.e. x * y) in a <p>
import React from "react";
import { Card } from "react-bootstrap";

const Multiplier = ( { x, y } ) => (

    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Multiplier</Card.Title>
            <Card.Text>
                <strong>{ x }</strong> x <strong>{ y }</strong> = <strong>{ x * y }</strong>
            </Card.Text>
        </Card.Body>
    </Card>

);

export default Multiplier;