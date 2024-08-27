import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        let item = { firstname, lastname, password, email };

        try {
            let response = await fetch("http://localhost:8000/api/register", {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                },
                body: JSON.stringify(item)
            });

            if (response.ok) {
                let result = await response.json();
                localStorage.setItem("user-info", JSON.stringify(result));
                navigate("/");
            } else {
                // Handle registration error
                setError("Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            setError("An error occurred. Please try again.");
        }
    }

    return (
        <div className="full-width flex f-center f-column">
            <div className="form-container">
                <form onSubmit={handleRegister}>
                    <h1 className="fancy-font xxl-txt">Register Your Account</h1>
                    <input 
                        className="xl-txt" 
                        value={firstname} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        type="text" 
                        placeholder="First Name" 
                    />
                    <input 
                        className="xl-txt" 
                        value={lastname} 
                        onChange={(e) => setLastName(e.target.value)} 
                        type="text" 
                        placeholder="Last Name" 
                    />
                    <input 
                        className="xl-txt" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" 
                        placeholder="Your Email" 
                    />
                    <div className="password-container">
                        <input 
                            className="xl-txt" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Password" 
                        />
                        <button 
                            type="button" 
                            className="view-password-btn"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <i className="fa-regular fa-eye"></i> : <i class="fa-regular fa-eye-slash"></i>}
                        </button>
                    </div>
                    <div className="password-container">
                        <input 
                            className="xl-txt" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Confirm Password" 
                        />
                    </div>
                    {error && <p className="error-text lg-txt">{error}</p>}
                    <div className="form-link">
                        <span className="lg-txt">Need to <Link to="/login">Login</Link>?</span>
                    </div>
                    <input className="xl-txt" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
}

export default Register;