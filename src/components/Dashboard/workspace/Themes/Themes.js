import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { createTypebot } from "../../../../api/form"; // Adjust the path if needed
import image4 from "../../../../assets/images/image 4.png";
import "./Themes.css"

export default function Theme() {
  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('selectedTheme') || 'light');

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  const saveThemeData = async () => {
    try {
      // For example, you could use an API to save the selected theme
      await createTypebot({ theme: selectedTheme });
      localStorage.setItem('selectedTheme', selectedTheme);
      console.log('Theme data saved:', selectedTheme);
    } catch (error) {
      console.error('Error saving theme data:', error);
    }
  };

  const handleShare = () => {
    const shareData = JSON.stringify({ theme: selectedTheme }, null, 2);

    navigator.clipboard.writeText(shareData)
      .then(() => {
        console.log('Theme data copied to clipboard:', shareData);
        alert('Theme data copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy theme data:', err);
        alert('Failed to copy theme data.');
      });
  };

  return (
    <div className="theme">
      <Navbar onSave={saveThemeData} onShare={handleShare} />
      <div className="theme-content">
        <div className="left-block">
          <p className="theme-left-block-text">Customize the theme</p>
          <div className="select-theme">
            <button
              className={`theme-button ${selectedTheme === 'light' ? 'selected' : ''}`}
              onClick={() => handleThemeSelect('light')}
            >
              <img src={image4} alt="Light theme" />
              <div className="row-left"></div>
              <div className="row-right"></div>
              <div className="row-left"></div>
              <div className="row-flex">
                <div className="row-flex-div"></div>
                <div className="row-flex-div"></div>
                <div className="row-flex-div"></div>
              </div>
              <p>Light</p>
            </button>
            <button
              className={`theme-button ${selectedTheme === 'dark' ? 'selected' : ''}`}
              onClick={() => handleThemeSelect('dark')}
            >
              <img src={image4} alt="Dark theme" />
              <div className="row-left"></div>
              <div className="row-right"></div>
              <div className="row-left"></div>
              <div className="row-flex">
                <div className="row-flex-div"></div>
                <div className="row-flex-div"></div>
                <div className="row-flex-div"></div>
              </div>
              <p>Dark</p>
            </button>
            <button
              className={`theme-button ${selectedTheme === 'tailblue' ? 'selected' : ''}`}
              onClick={() => handleThemeSelect('tailblue')}
            >
              <img src={image4} alt="Tail Blue theme" />
              <div className="row-left"></div>
              <div className="row-right"></div>
              <div className="row-left"></div>
              <div className="row-flex">
                <div className="row-flex-div"></div>
                <div className="row-flex-div"></div>
                <div className="row-flex-div"></div>
              </div>
              <p>Tail Blue</p>
            </button>
          </div>
        </div>
        <div className="right-block">
          <img src={image4} alt="Preview" />
          <div className="row1"></div>
          <div className="row2"></div>
        </div>
      </div>
    </div>
  );
}
