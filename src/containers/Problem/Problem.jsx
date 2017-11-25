import React, { Component } from 'react';
import Seperator from 'components/Seperator/Seperator.jsx';
import './Problem.css';

class Problem extends Component {
    render() {
        return (
			<div className="Problem">
               <Seperator width="200px" margin="0 0 50px"></Seperator>
                <div className="InnerProblem">
                    <div className="Double">
                        <div className="Left Column">
                            <img className="IntroPic" src={require('img/park1.jpg')}></img>
                        </div>
                        <div className="Right Column">
                            <h3 className="ProblemHeader">Husqvarna möter ett problem - urbanisering.</h3>
                            <h4 className="Italic">“Den globala medelklassens konsumtion kan komma att tredubblas fram till 2030 då 60 procent av befolkningen beräknas bo i stadsmiljö.”</h4>
                            <Seperator width="100px" margins="20px 0"/>
                            <p>Allt fler folk väljer att flytta närmare städer. Detta leder till att <strong>en stor del av Husqvarnas kundgrupp över tid kommer att försvinna</strong>. I detta fallet blir levande grönområden allt viktigare.</p>
                            <p>Husqvarna har högkvalitativa produkter som mestadels används av husägare. Gardena har vissa produkter riktade för lägenheter, men detta är dyra produkter i liten skala som ger ganska liten återbäring. <strong>Fokus ligger idag på produktinnovation</strong>. Företaget jobbar med nyutveckling av bättre, säkrare och anpassade produkter för individer men hur kan man nå ut med dessa nya innovationer till en större massa?</p>
                            <p>Avsaknad av parker och flora kan leda till flertalet stressrelaterade problem. En blomma i fönstret räcker inte. Hur kan vi hitta <strong>nya sätt att distribuera</strong> och samtidigt få folk att må bättre?</p>
                            <p>Vi har tittat på <strong>nya distributionssätt</strong> och byggt ett koncept för att engagera fler folk i socialt trädgårdsarbete.</p>
                        </div>
                    </div>
                </div>
			</div>
        );
    }
}

export default Problem;
