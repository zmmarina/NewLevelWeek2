import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="SpeakUp"/>
                    <h2>Learn the language you want.</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="Learning Plataform" 
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Study time"/>
                        Study
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Teach time"/>
                        Teach
                    </Link>
                </div>

                <span className="total-connections">
                    Total of 200 connections made <img src={purpleHeartIcon} alt="Heart"/>
                </span>



            </div>            
        </div>
    )
}

export default Landing;