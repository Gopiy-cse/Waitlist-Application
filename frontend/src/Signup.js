import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import myvideo from "./1.mp4";
import { useLocation } from "react-router";
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from "validator";

function Signup() {
    const navigate = useNavigate();
    const state = useLocation();
    let refid = null;

    // Check if there is a referral ID in the URL location state
    if (state.state && state.state.ref_id) {
        refid = state.state.ref_id;
    }

    // Function to display toast notifications
    const notify = (msg) => {
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip
        });
    }

    // Initialize state variables for email and referral ID
    const [email, setEmail] = useState("");
    const [ref_id, setRef] = useState(refid || "");

    // Event handler for email input changes
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    // Event handler for referral ID input changes
    const handleRefChange = (event) => {
        setRef(event.target.value);
    }

    // Function to validate email format
    const validateEmail = (email) => {
        if (!validator.isEmail(email)) {
            return false;
        } else {
            return true;
        }
    }

    const handleLogin=(event)=>{
        navigate('/Adminlogin');
    }

    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate the email format
        if (!validateEmail(email)) {
            notify("Enter Valid Email");
            return;
        }

        // Send a POST request to the server to retrieve the user's position
        Axios.post('http://localhost:8001/find')
            .then((res) => {
                const pos = res.data.position;
                if(pos)
                {
                    // Send a POST request to register the user with email, referral ID, and position
                Axios.post('http://localhost:8001/sign', { email, ref_id, pos })
                .then((res) => {
                    if (res.data.res != null) {
                        notify("Email Already Exists");
                    } else {
                        // Navigate to the "/Dashboard" route with user position and email in the state
                        navigate('/Dashboard', { state: { number: pos + 1, email: email } });
                    }
                })
                .catch(err => console.log(err));
                }
                
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="full">
            
            <video src={myvideo} autoPlay muted loop id="my-video" />
            <button className="admin" onClick={handleLogin}>ADMIN LOGIN</button>
            <div className="form-class">
                <form onSubmit={handleSubmit}>
                    <center><h1>Signup</h1></center>
                    <label>Email</label>
                    <input type="email" id="mail" value={email} placeholder="Enter Mail" onChange={handleEmailChange} />
                    <br></br>
                    <br></br>
                    <input type="text" id="ref" value={ref_id} placeholder="Do you Have any Referral Id (Optional)" onChange={handleRefChange} />
                    <br></br><br></br>
                    <center><button type="submit" id="but">Submit</button></center>
                </form>
                <ToastContainer />
            </div>    
        </div>
    )
}

export default Signup;
