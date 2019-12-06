// Create a component <CountBy step={ 5 }> that takes a step prop. It should display a number (starting at 0) inside a <p>. Every time it is clicked the number should go up by step.

import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class CountBy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            initial: 0,
        };

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {

        let { step } = this.props;
        let { initial } = this.state;

        this.setState( { 
            initial: initial + +step,
        } );
        
    }

    render() {

        let { step } = this.props;
        let { initial } = this.state;

        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>CountBy</Card.Title>
                        <Card.Text>
                            <strong>{ initial }</strong>
                        </Card.Text>
                        <Button 
                            variant="primary"
                            onClick={ this.handleClick }
                        >Add { step }</Button>
                    </Card.Body>
                </Card>
                
            </>
        );

    }

}

export default CountBy;