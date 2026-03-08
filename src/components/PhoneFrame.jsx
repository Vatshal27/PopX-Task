function PhoneFrame({ children }) {
    return (
        <div className="viewport-frame">
            <div className="mobile-screen">
                {children}
            </div>
        </div>
    );
}

export default PhoneFrame;