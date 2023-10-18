import React from "react";
import "./Admintable.css";
import { Table } from "./Table";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

function Admintable() {
    const state = useLocation();
    const navigate = useNavigate();

    // Check if the location state contains a "log" key with a value of "success"
    if (state.state && state.state.log === "success") {
        // If "log" is "success", render the Admin Table
        return (
            <div className="Admintable">
                <ScrollAnimation animateIn="bounceInLeft">
                    <Table />
                </ScrollAnimation>
            </div>
        );
    } else {
        // If "log" is not "success", redirect to the Admin login page
        window.location.href = "/Adminlogin";
    }
}

export default Admintable;
