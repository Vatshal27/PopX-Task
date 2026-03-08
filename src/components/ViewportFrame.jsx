function ViewportFrame({ children }) {
    return (
        <div className="viewport-frame">
            <div className="mobile-canvas">
                {children}
            </div>
        </div>
    );
}

export default ViewportFrame;