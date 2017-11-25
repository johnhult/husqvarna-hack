import React, { Component } from 'react';
import Seperator from 'components/Seperator/Seperator.jsx';
import './Home.css';

class Home extends Component {
    
    render() {
        return (
			<div className="Home">
				<h1 className="Header">Social Gardening</h1>
				<h2 className="Subheader">Gemensamma trädgårdar & grönytor för långlivad hållbarhet.</h2>
				<Seperator width="200px" margins="50px 0" />
				<img className="IntroPic" src={require('img/sg-intro.jpg')}></img>
			</div>
        );
    }
}

export default Home;
