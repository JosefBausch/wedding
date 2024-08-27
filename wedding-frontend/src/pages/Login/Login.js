import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        setError("");
    
        try {
            console.log("Attempting to send request to:", "http://localhost:8000/api/login");
            let response = await fetch("http://localhost:8000/api/login", {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email, password })
            });
    
            console.log("Response status:", response.status);
            console.log("Response headers:", response.headers);
    
            if (response.ok) {
                let result = await response.json();
                localStorage.setItem("user-token", result.token);
                navigate("/");
            } else {
                let errorData = await response.json();
                console.error("Login failed:", errorData);
                setError(errorData.message || "Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("An error occurred. Please try again.");
        }
    }

    return (
        <div className="full-width flex f-center f-column">
            <div className="form-container">
                <form onSubmit={handleLogin}>
                    <h1 className="fancy-font xxl-txt">Login to Your Account</h1>
                    {error && <div className="error-message">{error}</div>}
                    <input 
                        className="xl-txt" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" 
                        placeholder="Your Email" 
                        required
                    />
                    <div className="password-container">
                        <input 
                            className="xl-txt" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Password" 
                            required
                        />
                        <button 
                            type="button" 
                            className="view-password-btn"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                        </button>
                    </div>
                    <div className="form-link">
                        <span className="lg-txt">Need to <Link to="/register">Create an Account</Link>?</span>
                    </div>
                    <input className="xl-txt" type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
}

export default Login;