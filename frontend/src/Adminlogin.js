import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles.css";

function Adminlogin() {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    // Event handler for user input changes
    const handleUserChange = (event) => {
        setUser(event.target.value);
    }

    // Event handler for password input changes
    const handlePassChange = (event) => {
        setPass(event.target.value);
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

    // Initialize a variable to track login success or failure
    let log = false;

    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Send a POST request to the server to check user credentials
        Axios.post('http://localhost:8001/check', { user, pass })
            .then((res) => {
                if (res.data.find) {
                    log = true;
                    // If login is successful, navigate to the Admin Table page with a success state
                    navigate('/Admintable', { state: { log: "success" } });
                } else {
                    // If login fails, display an error notification
                    notify("Invalid Credentials");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="adminlog">
            <form className="form-class" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input type="text" id="mail" value={user} placeholder="Enter Username or Email" onChange={handleUserChange} /><br></br><br></br>
                <input type="password" id="password" value={pass} placeholder="Enter Password" onChange={handlePassChange} /><br></br><br></br>
                <center><button type="submit" id="but">Submit</button></center>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Adminlogin;
