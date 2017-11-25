import React, { Component } from 'react';
import Seperator from 'components/Seperator/Seperator.jsx';
import './Solution.css';
import SolutionHero from 'img/park4.jpg';

class Solution extends Component {
    constructor(props) {
        super(props);
        this.styles = {
            backgroundImage: 'url(' + SolutionHero + ')'
        };
    }
    render() {
        return (
			<div className="Solution">
                <div className="SolutionHero" style={this.styles}></div>
                <div className="SolutionTextBlock">
                    <h3 className="SolutionHeader">Lösningen är Social Gardening.</h3>
                    <h4 className="Italic">Husqvarna öppnar platser för gemenskap och engagerar individer inom både natur och företaget i sig.</h4>
                    <Seperator width="200px" margins="20px 0"/>
                    <div className="InnerTextBlock">
                        <p>Vi bygger ett koncept kring existerande produkter som Husqvarna redan idag har lanserat. Eftersom företaget redan <strong>inom ett år räknar med att ha över 100 uppkopplade maskiner och sensorer</strong> så vill vi skapa större områden med hjälp av kostnadseffektiva lösningar.</p>
                        <img className="TextImage" src={require('img/husq3.jpg')}></img>
                        <p>Detta gör att <strong>man kommer åt människor som vanligtvis hamnar utanför Husqvarnas kundgrupp</strong>. Med hjälp av en social trädgård där Husqvarna förser området med den teknik och verktyg som behövs för att sköta området och sen arbeta med <strong>crowdsourcing</strong> så kommer folk, även i tätbebyggda områden, att få vara en del av grönområderna runt sig.</p>
                    </div>
                </div>
			</div>
        );
    }
}

export default Solution;
