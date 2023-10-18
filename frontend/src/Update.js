import React, { useState } from "react";
import Axios from "axios";
import "./Update.css"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

function Update() {
    const navigate = useNavigate();
    const state = useLocation();
    let mail = null;
    let refid = null;
    let num = null;

    // Check if there's email, referal_id, and num in the location state
    if (state.state && state.state.email) {
        mail = state.state.email;
    }
    if (state.state && state.state.referal_id) {
        refid = state.state.referal_id;
    }
    if (state.state && state.state.num) {
        num = state.state.num;
    }

    // Initialize state variables for email, referal_id, and position
    const [email, setEmail] = useState(mail || "");
    const [referal_id, setRef] = useState(refid || "");
    const [pos, setPos] = useState(num || "");

    // Event handler for email input changes
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    // Event handler for referal_id input changes
    const handleRefChange = (event) => {
        setRef(event.target.value);
    }

    // Event handler for position input changes
    const handlePosChange = (event) => {
        setPos(event.target.value);
    }

    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Send a POST request to update user information
        Axios.post('http://localhost:8001/update', { email, referal_id, pos })
            .then((res) => {
                if (res.data.status == 200) {
                    navigate(-1);
                }
            })
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="form">
                <center><h1>Update</h1></center>
                <input type="text" value={email} id="mail" placeholder="Enter Email" onChange={handleEmailChange} /><br></br><br></br>
                <input type="text" value={referal_id} id="ref" placeholder="Enter Referal Id" onChange={handleRefChange} /><br></br><br></br>
                <input type="number" value={pos} id="position" placeholder="Enter Position" onChange={handlePosChange} /><br></br><br></br>
                <center><button type="submit" id="but">Update</button></center>
            </form>
        </div>
    )
}

export default Update;
