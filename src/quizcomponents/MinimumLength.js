// Create a component <MinimumLength length={ 30 }> that contains an <input>. The user should see a warning, "Too short!", unless they have entered at least length characters.

import React, { Component } from "react";
import { Form } from "react-bootstrap";

class MinimumLength extends Component {

    constructor(props) { 
        super(props);

        this.state = {
            input: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        let value = e.currentTarget.value

        this.setState( {
            input: value,
        } )

    }

    render() {

        let { input } = this.state;
        let { length } = this.props;

        let valid = input.length < length;

        return (

            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        style={ {
                            borderColor: valid? "red" : "green",
                        } } 
                        type="password" 
                        placeholder="Password" 
                        onChange={ this.handleChange }
                        value={ input }
                    />
                    <Form.Text className="text-muted">{ valid ? "Too Short" : "Valid" }</Form.Text>
                </Form.Group>
            </Form>

        );

    }

}

export default MinimumLength;