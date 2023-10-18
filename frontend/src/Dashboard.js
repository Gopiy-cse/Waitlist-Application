import React, { useState } from "react";
import CountUp from 'react-countup';
import "./styles.css";
import { useLocation } from "react-router";
import typec from "./4.jpeg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import Axios from "axios";

function Dashboard() {
    const state = useLocation();
    let pos = null;
    let mail = null;

    // Check if there's a "number" and "email" in the location state
    if (state.state && state.state.number) {
        pos = state.state.number;
    }
    if (state.state && state.state.email) {
        mail = state.state.email;
    }

    // Send a POST request to notify the user via email
    Axios.post('http://localhost:8001/mail', { mail })
        .then((res) => console.log(res));

    return (
        <div className="top">
            <div>
                <center><h1>Your Position is:
                    <center style={{ fontSize: '150px' }}>
                        <CountUp
                            start={0}
                            end={pos}
                            duration={3} />
                    </center>
                </h1></center>
            </div>
            <div className="main">
                <ScrollAnimation animateIn="fadeIn">
                    <center style={{ fontSize: '40px' }}>
                        <h1>All-new 48MP Main camera. For breathtaking, smile-making picture taking.</h1>
                    </center>
                </ScrollAnimation>
                <center><h1>SPECIFICATIONS</h1></center>
                <div className="content">
                    <h1>Colors Available</h1>
                    <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
                        <div id="container" className="flex">
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                            <div className="circle4"></div>
                            <div className="circle5"></div>
                        </div>
                    </ScrollAnimation>
                </div><br></br>
                <br></br>
                <div>
                    <h1 style={{ paddingLeft: '300px' }}>New Features</h1>
                    <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
                        <img src={typec} style={{ width: '50%', height: '50%', paddingLeft: '400px', borderRadius: '50px' }} />
                    </ScrollAnimation>
                </div>
                <div>
                    <center>
                        <h1 style={{ fontSize: '50px' }}>USB TYPE-C</h1>
                        <h2 style={{ fontSize: '30px' }}>The USB Type C Supports you to Charge all Devices with One Cable</h2>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
