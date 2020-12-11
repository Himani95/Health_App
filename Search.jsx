import React from "react";
import { Link } from "react-router-dom";
//import CreateAccountDetails from "./CreateAccountDetails";
import SearchDocPage from './SearchDocPage';
import CreateAccountPage from "./CreateAccountDetails";

const ThirdPage  = () => {
    return (
        <div>
            <Link style={linkstyle} to="/welcomepage" >Home</Link>
            <h2>Search for your doctor </h2>

            <SearchDocPage />
        </div>
    );
};

const linkstyle = {
    color: 'white'
};

export default ThirdPage;