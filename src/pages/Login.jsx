import { useState } from "react";
import PhoneFrame from "../components/PhoneFrame";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormValid = emailPattern.test(email) && password.length >= 6;
    const handleLogin = () => {

        if (!emailPattern.test(email)) {
            setError("Enter a valid email");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setError("");
        navigate("/profile");
    };

    return (

        <PhoneFrame>

            <h1 className="title">Signin to your PopX account</h1>
            <div className="page">

                <div>
                    <p className="subtitle">
                        Lorem ipsum dolor sit amet
                    </p>

                    <div className="input-wrapper">
                        <label>Email Address</label>
                        <input
                            className="input-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email address"
                        />
                    </div>

                    <div className="input-wrapper">
                        <label>Password</label>
                        <input
                            type="password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                        />
                    </div>

                    {error && (
                        <p style={{ color: "red", fontSize: "13px" }}>
                            {error}
                        </p>
                    )}
                </div>
                <button
                    className={`primary-btn ${!isFormValid ? "btn-disabled" : ""}`}
                    onClick={handleLogin}
                    disabled={!isFormValid}
                >
                    Login
                </button>

            </div>

            <BottomNav page={2} />

        </PhoneFrame>
    );
}

export default Login;