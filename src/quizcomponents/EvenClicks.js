// Create a component <EvenClicks> that displays "Even" if it's been clicked an even number of times and "Odd" if it's been clicked an odd number of times.

import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class EvenClicks extends Component {

    // add a constructor method
    // it gets passed props as its first argument
    constructor(props) {
        // make sure you always add this, it makes Component work
        super(props);

        // setup our state
        // just a plain old JavaScript object 
        this.state = {
            clicks: 0,
            };

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {

        let { clicks } = this.state;

        // set new value
        // pass in a POJO with values we want to update 
        this.setState( { clicks: clicks + 1 } );
    }

    render() {

        let { clicks } = this.state;

        return (

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>EvenClicks</Card.Title>
                    <Card.Text>
                        { clicks % 2 ? "Even" : "Odd" }
                    </Card.Text>
                    <Button 
                        variant="primary"
                        onClick={ this.handleClick }
                    >Click Me!</Button>
                </Card.Body>
            </Card>
    
        );

    }

}

export default EvenClicks;