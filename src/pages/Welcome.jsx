import { useNavigate } from "react-router-dom";
import PhoneFrame from "../components/PhoneFrame";
import BottomNav from "../components/BottomNav";

function Welcome() {

    const navigate = useNavigate();

    return (
        <PhoneFrame>

            <div className="spacer"></div>

            <div>
                <h1 className="title">Welcome to PopX</h1>

                <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <button
                    className="primary-btn"
                    onClick={() => navigate("/signup")}
                >
                    Create Account
                </button>

                <button
                    className="secondary-btn"
                    onClick={() => navigate("/login")}
                >
                    Already Registered? Login
                </button>
            </div>

            <BottomNav page={1} />

        </PhoneFrame>
    );
}

export default Welcome;