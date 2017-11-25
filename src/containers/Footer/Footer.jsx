import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
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
			<div className="Footer" style={this.styles}>
                <span>A concept from Team GBG. Made with ♥ for <img src={require('img/logo.png')}></img></span>
			</div>
        );
    }
}

export default Footer;
