import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css"

export default function Navbar({ onSave, onShare }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActive] = useState("");
    const [isShareEnabled, setShareEnabled] = useState(false);
    const [formName, setFormName] = useState("");  // State to hold input text
    const [isShareButtonActive, setShareButtonActive] = useState(false); // State for share button active status

    useEffect(() => {
        setActive(location.pathname.substring(1));
    }, [location.pathname]);

    const handleNavigation = (path, name) => {
        setActive(name);
        navigate(path);
    };

    const handleSaveClick = () => {
        if (onSave) {
            onSave(formName);  // Pass the input text to the save function
        }
        setShareEnabled(true);  // Enable the share button
        setShareButtonActive(true); // Activate the share button
        if (onShare && isShareEnabled) {
            onShare();
        }
    };

    const handleShare = (formName) => {
        // Example logic to generate a shareable link
        const baseUrl = "http://localhost:4003/share"; // Adjust as needed
        const shareableLink = `${baseUrl}?formName=${encodeURIComponent(formName)}`;
        
        // Here you could either open the link in a new tab or copy it to the clipboard
        // For example, to open the link:
        window.open(shareableLink, "_blank");
    
        // Or to copy it to the clipboard:
        navigator.clipboard.writeText(shareableLink).then(() => {
            alert("Link copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy link:", err);
        });
    };    

    const handleInputChange = (event) => {
        setFormName(event.target.value);  // Update input text state
    };

    const handleBackClick = () => {
        navigate('/dashboard');
    };

    return (
        <div className="navbar">
            {active === "flow" && (
                <input
                    type="text"
                    placeholder="Enter Form Name"
                    className="form-name"
                    value={formName}  // Set the value of the input field
                    onChange={handleInputChange}  // Handle input change
                />
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
                    className={`share ${isShareButtonActive ? "active" : ""}`}  // Apply active class based on state
                    onClick={onShare}
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
    );
}
