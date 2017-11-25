import React, { Component } from 'react';
import './Seperator.css';

class Seperator extends Component {
    constructor(props) {
        super(props);
        this.styles = {
            width: this.props.width,
            margin: this.props.margins,
            backgroundColor: this.props.color ? this.props.color : ''
        };
    }
    
    render() {
        return (
			<div className="Seperator" style={this.styles}></div>
        );
    }
}

export default Seperator;
