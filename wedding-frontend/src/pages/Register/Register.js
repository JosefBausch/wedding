import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import "./Register.scss";

function Register() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function signUp() {
        let item = { firstname, lastname, password, email };

        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/");
    }

    return (
        <div className="full-width flex f-center f-column">
            <div className="form-container f-column">
            <h1>Register Your Account</h1>
                <form>
                    <input className="xl-txt" value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" />
                    <input className="xl-txt" value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" />
                    <input className="xl-txt" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" />
                    <input className="xl-txt" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    <span className="lg-txt form-link">Need to <Link to="/login">Login</Link>?</span>
                    <input className="xl-txt" onClick={signUp} type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
}

export default Register;
