import { useState } from "react";
import PhoneFrame from "../components/PhoneFrame";
import BottomNav from "../components/BottomNav";

function Signup() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [company, setCompany] = useState("");
    const [agency, setAgency] = useState("");
    const [errors, setErrors] = useState({});
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const handleSignup = () => {

        const newErrors = {};

        if (name.trim() === "") {
            newErrors.name = "Full name is required";
        }

        if (!phonePattern.test(phone)) {
            newErrors.phone = "Phone number must be exactly 10 digits";
        }

        if (!emailPattern.test(email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!passwordPattern.test(password)) {
            newErrors.password =
                "Password must contain letters and numbers and be special    characters";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Account created successfully");
        }
    };

    return (

        <PhoneFrame>

            <h1 className="title">Create your PopX account</h1>
            <div className="page">

                <div className="input-wrapper">
                    <label>Full Name*</label>
                    <input
                        className="input-field"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setErrors({ ...errors, name: "" });
                        }}
                        placeholder="Marry Doe"
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}

                </div>

                <div className="input-wrapper">
                    <label>Phone number*</label>
                    <input
                        type="tel"
                        className="input-field"
                        value={phone}
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            setPhone(value);
                            setErrors({ ...errors, phone: "" });
                        }}
                        placeholder="9876543210"
                    />{errors.phone && <p className="error-text">{errors.phone}</p>}
                </div>

                <div className="input-wrapper">
                    <label>Email address*</label>
                    <input
                        className="input-field"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setErrors({ ...errors, email: "" });
                        }}
                        placeholder="example@mail.com"
                    />{errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                <div className="input-wrapper">
                    <label>Password*</label>
                    <input
                        type="password"
                        className="input-field"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setErrors({ ...errors, password: "" });
                        }}
                        placeholder="Enter password"
                    />{errors.password && <p className="error-text">{errors.password}</p>}
                </div>

                <div className="input-wrapper">
                    <label>Company name</label>
                    <input
                        className="input-field"
                        value={company}
                        onChange={(e) => {
                            setCompany(e.target.value);
                        }}
                        placeholder="Company name"
                    />
                </div>
                <div style={{ marginBottom: "22px" }}>

                    <label style={{ fontSize: "13px", color: "#5a5a5a" }}>
                        Are you an Agency?*
                    </label>

                    <div className="radio-group">

                        <label className="radio-option">
                            <input
                                type="radio"
                                name="agency"
                                value="yes"
                                onChange={(e) => setAgency(e.target.value)}
                            />
                            Yes
                        </label>

                        <label className="radio-option">
                            <input
                                type="radio"
                                name="agency"
                                value="no"
                                onChange={(e) => setAgency(e.target.value)}
                            />
                            No
                        </label>

                    </div>

                </div>
                <button
                    className="primary-btn"
                    onClick={handleSignup}
                >
                    Create Account
                </button>

            </div>

            <BottomNav page={3} />

        </PhoneFrame>

    );
}

export default Signup;