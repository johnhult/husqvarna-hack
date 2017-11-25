import React, { Component } from 'react';
import Seperator from 'components/Seperator/Seperator.jsx';
import './Business.css';

class Business extends Component {
    render() {
        return (
			<div className="Business">
                <div className="BusinessInner">
                    <h3 className="BusinessHeader">Vad tjänar Husqvarna på detta?</h3>
                    <h4 className="Italic">Cash money flow, yo.</h4>
                    <Seperator width="200px" margins="20px 0"/>
                    <p>Konceptet kan anpassas för en mängd olika situationer. Nya bostadsområden som byggs. Avgränsade delar i parker. Mindre växthus. I ett typexempel kan Husqvarna sälja in en komplett lösning för ett bostadsområde. Fortsättningsvis kommer man då i kontakt med slutanvändarna som även i sin tur får upp ögonen för Husqvarnas produkter och kan lita på företaget om man vill köpa mindre produkter för personligt bruk.</p>
                    <p>Om en stad satsar på konceptet blir det en win-win situation där staden inte längre behöver betala för att hålla iordning i området då detta sköts via crowdsourcing. Husqvarna skulle då kunna tillhandahålla kritiska verktyg och sensorer gratis och höjer sin brand awareness samtidigt som man når en bred massa av individer.</p>
                    <p>Konceptet skulle även kunna köpas in som en prenumerationstjänst där Husqvarna står för service och liknande. Vill man istället lägga upp det som en engångskostnad fungerar även detta då man kan köpa in verktyg och sen endast betala för service då den behövs.</p>
                    <div className="ImgGrid">
                        <img className="TextImage1" src={require('img/husq1.jpg')}></img>
                        <img className="TextImage2" src={require('img/husq5.jpg')}></img>
                        <img className="TextImage3" src={require('img/husq4.jpg')}></img>
                        <img className="TextImage4" src={require('img/husq2.jpg')}></img>
                    </div>
                    <p>I en modern värld som förändras måste man hitta nya vägar att nå ut till människor och jobba med brand awareness samtidigt som man etablerar sig som mer än bara ett företag. Att människor får upp ögonen för Husqvarna och talar gott om företaget kommer att leda till att man öppnar upp en helt ny marknad.</p>
                </div>
			</div>
        );
    }
}

export default Business;
