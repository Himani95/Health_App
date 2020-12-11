import React from "react";
//import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import { BeatLoader } from 'react-spinners';


//Link Tag is used below for redirecting from one page to the another internally

const MainPage  = () => {
    
    return (
        <div id="Head">
            <h1 align="center" border-botton="1px"> WELCOME TO <br/> INFIHEALTH!!!</h1>
            <h3>Mission: To inspire hope and contribute to health and well-being by providing the best care and guidance to every patient through high quality virtual solutions</h3>
            <br/>
            <h5>Imagine a healthcare app that lets you see a doctor – virtually or in person – from the comfort of your home, open 24*7*365 days and eliminates the hassle of making an appointment. Won't that be just vowww!? INFIHEALTH allows patients to view doctors in specialities like opthalmology, dentistry, cardiology and others and view open appointment time slots in the next 24 hours and book it instantly online without being put on hold. You can also receive appointment reminder notifications offering a new solution for tech-savvy patient population. This app looks to provide people everything possible to a healthy living just at their fingertips. Come this way!!!</h5>
            <Link style={linkstyle} to="/CreateAccountDetails" >Create Account</Link>
            
            <br/>
            
            <Link style={linkstyle} to="/Search" >Continue as Guest</Link>
            
        </div>
    );

};

const linkstyle = {
    color: 'white'
};

export default MainPage;
