import { useNavigate } from "react-router-dom";

function TopNav({ title }) {
    const navigate = useNavigate();

    return (
        <div className="top-nav">
            <button
                className="back-btn"
                onClick={() => navigate(-1)}
            >
                ←
            </button>

            <h1 className="top-title">{title}</h1>
        </div>
    );
}

export default TopNav;