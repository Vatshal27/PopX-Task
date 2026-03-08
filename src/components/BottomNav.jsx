import { useNavigate } from "react-router-dom";

function BottomNav({ page }) {

    const navigate = useNavigate();

    const pages = [
        "/",
        "/login",
        "/signup",
        "/profile"
    ];

    const goPrev = () => {
        if (page > 1) {
            navigate(pages[page - 2]);
        }
    };

    const goNext = () => {
        if (page < 4) {
            navigate(pages[page]);
        }
    };

    return (
        <div className="bottom-nav">

            <span
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
            >
                ⌂
            </span>

            <span
                style={{ cursor: "pointer" }}
                onClick={goPrev}
            >
                ‹
            </span>

            <span>{page} of 4</span>

            <span
                style={{ cursor: "pointer" }}
                onClick={goNext}
            >
                ›
            </span>

        </div>
    );
}

export default BottomNav;