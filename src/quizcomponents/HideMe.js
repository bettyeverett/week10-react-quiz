// Create a component <HideMe>Blah blah blah</HideMe> that uses children to accept some content. When the component is clicked the content should be hidden.

import React, { Component } from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";

import Content from "./Content";

class HideMe extends Component {


      render () {

        let popover = (
            <Popover id="popover-basic">
                <Content content={ this.props.content }/>
            </Popover>
        );
          

        return (

            <OverlayTrigger trigger="click" placement="right" overlay={ popover }>
                <Button variant="success">Click me to see!!!</Button>
            </OverlayTrigger>

        );
        
    }

}

export default HideMe;