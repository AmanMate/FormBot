import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import "./Navbar.css"

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActive] = useState("");

    useEffect(() => {
        setActive(location.pathname.substring(1));
    }, [location.pathname]);

    const handleNavigation = (path, name) => {
        setActive(name);
        navigate(path);
    };

    const [isShareEnabled, setShareEnabled] = useState(false);

    const handleSaveClick = () => {
        setShareEnabled(true);
    };

    const handleBackClick = () => {
        navigate('/dashboard');
    };

    return (
        <div className="navbar">
            {active === "flow" && (
                <input type="text" placeholder="Enter Form Name" className="form-name" />
            )}
            <nav className="active-button">
                <a
                className={`submenu ${active === "flow" ? "active" : ""}`}
                onClick={() => handleNavigation("/flow", "flow")}
                >
                  <p>Flow</p>
                </a>
                <a
                className={`submenu ${active === "theme" ? "active" : ""}`}
                onClick={() => handleNavigation("/theme", "theme")}
                >
                  <p>Theme</p>
                </a>
                <a
                className={`submenu ${active === "response" ? "active" : ""}`}
                onClick={() => handleNavigation("/response", "response")}
                >
                  <p>Response</p>
                </a>
            </nav>

            <div className="share&save">
                <button 
                    className="share" 
                    disabled={!isShareEnabled}
                >
                    Share
                </button>
                <button 
                    className="save" 
                    onClick={handleSaveClick}
                >
                    Save
                </button>
                <button className="back" onClick={handleBackClick}>x</button>
            </div>
        </div>
    )
}
