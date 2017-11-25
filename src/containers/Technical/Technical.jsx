import React, { Component } from 'react';
import Seperator from 'components/Seperator/Seperator.jsx';
import './Technical.css';

class Technical extends Component {
    render() {
        return (
			<div className="Technical">
               <Seperator width="200px" margins="50px 0 0"></Seperator>
                <div className="InnerTechnical">
                    <div className="Double">
                        <div className="Left Column">
                            <h3 className="TechnicalHeader">Vad är Social Gardening?</h3>
                            <h4 className="Italic">App, sensorer, verktyg och ett helt nytt sätt att umgås.</h4>
                            <Seperator width="100px" margins="20px 0"/>
                            <h4>Verktygen</h4>
                            <p>Husqvarna har idag alla verktyg som behövs för att sköta en trädgård. I konceptet Social Gardening så <strong>förser Husqvarna ett grönområde med verktyg</strong>, som är anslutna till en gateway specifik för en Social Garden. Detta leder till att man kan se när verktygen används och hur de mår. Med hjälp av denna datan kommer man kunna se när verktyg behöver servas. I förlängningen leder detta till att <strong>verktyg håller längre</strong> och människorna som använder verktygen kommer att inse kvaliten på Husqvarnas produkter. Man kan även koppla denna datan till appen för att upptäcka "bragder" som utförts med hjälp av specifika verktyg.</p>
                            <h4>Sensorerna</h4>
                            <p>Sensorerna håller koll på hur din Social Garden mår och vilka delar som behöver ses över. Om jorden är torr så kommer det <strong>automatisk skapas en uppgift i appen</strong> som sedan kan utföras av vem som helst som är en del av området.</p>
                            <h4>Appen</h4>
                            <p>Med hjälp av en app kommer man sedan att kunna kommunicera med slutanvändaren. Uppgifter kommer kunna att slutföras i appen och man kan även se till att personer inte fuskar med hjälp av datan. En handfull uppgifter kommer finnas tillgängligt i appen som till exempel vattna växter, klippa häckar eller skörda potatis. I appen kommer man kunna få "bragder" som leder till att man <strong>får erkännande inom det community</strong> som revolverar runt just <strong>DIN</strong> Social Garden.</p>
                            <div className="ImageBox">
                                <img src={require('img/app1.jpg')}></img>
                                <img src={require('img/app2.jpg')}></img>
                                <img src={require('img/app3.jpg')}></img>
                            </div>
                            <p>I appen kommer man även kunna skapa nya sätt att umgås genom att planera in egna tasks som är oberoende av datan. Det skulle kunna vara saker som att plantera nya plantor eller andra tasks där man kan hjälpas åt att förfina sitt område. Människor skapar på det här sättet nya sociala sammanhang att umgås i där vem som helst kan integreras i och <strong>känna en trygghet</strong> runt just sin Social Garden. I utsträckningen kommer Husqvarna bland annat kunna erbjuda rabatter till individer som bidrar med mycket "bragder" och därmed redan har varit i <strong>kontakt med Husqvarnas produkter</strong>.</p>
                            <p>En klick-prototyp finns tillgänglig <a href="https://www.figma.com/proto/Ezrp3ZptPFDiCeK77g7Puv0H/Social-Gardening-concept?scaling=contain&node-id=4%3A7">här</a>.</p>
                        </div>
                        <div className="Right Column">
                            <img className="SGPic" src={require('img/social-gardening.png')}></img>
                            <img className="Gif" src={require('img/app4.gif')}></img>
                        </div>
                    </div>
                </div>
			</div>
        );
    }
}

export default Technical;
