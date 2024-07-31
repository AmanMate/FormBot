import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { createTypebot } from "../../../../api/form"; // Adjust the path as necessary

export default function Flow() {
  const [popups, setPopups] = useState([]);
  const [counters, setCounters] = useState({
    Text: 0,
    Image: 0,
    Video: 0,
    GIF: 0,
    Number: 0,
    Email: 0,
    Phone: 0,
    Date: 0,
    Rating: 0,
    Buttons: 0,
  });
  const [formName, setFormName] = useState("");

  const openPopup = (content) => {
    const newCount = (counters[content] || 0) + 1;
    setCounters({
      ...counters,
      [content]: newCount,
    });

    const newPopup = {
      id: new Date().getTime(),
      content: `${content} ${newCount}`,
    };
    setPopups([...popups, newPopup]);
  };

  const closePopup = (id) => {
    setPopups(popups.filter((popup) => popup.id !== id));
  };

  const bubbleButtons = [
    { label: "Text", content: "Text" },
    { label: "Image", content: "Image" },
    { label: "Video", content: "Video" },
    { label: "GIF", content: "GIF" },
  ];

  const inputButtons = [
    { label: "Text", content: "Input Text" },
    { label: "Number", content: "Input Number" },
    { label: "Email", content: "Input Email" },
    { label: "Phone", content: "Input Phone" },
    { label: "Date", content: "Input Date" },
    { label: "Rating", content: "Input Rating" },
    { label: "Buttons", content: "Input Buttons" },
  ];

  const saveFlowData = async (name) => {
    const flowData = {
      popups,
      counters,
      name,
    };

    try {
      await createTypebot(flowData);
      console.log('Flow data saved and typebot created:', flowData);
    } catch (error) {
      console.error('Error saving flow data:', error);
    }
  };

  const handleShare = () => {
    const flowData = {
      popups,
      counters,
      formName,
    };

    const shareData = JSON.stringify(flowData, null, 2);

    navigator.clipboard.writeText(shareData)
      .then(() => {
        console.log('Flow data copied to clipboard:', shareData);
        alert('Flow data copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy flow data:', err);
        alert('Failed to copy flow data.');
      });
  };

  return (
    <div className="workspace">
      <Navbar onSave={saveFlowData} onShare={handleShare} />
      <div className="sidebar">
        <div className="bubble">
          <h2 className="font">Bubbles</h2>
          <div className="bubble-buttons">
            {bubbleButtons.map((button, index) => (
              <button
                key={index}
                className="button-onclick"
                onClick={() => openPopup(button.content)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
        <div className="inputs">
          <h2 className="font">Inputs</h2>
          <div className="input-buttons">
            {inputButtons.map((button, index) => (
              <button
                key={index}
                className="button-onclick"
                onClick={() => openPopup(button.content)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="side2">
        <button className="start">Start</button>
      </div>

      {popups.map((popup) => (
        <div key={popup.id} className="popup">
          <div className="popup-content">
            <h2 className="popup-font">{popup.content}</h2>
            {popup.content.startsWith("Text") && (
              <textarea
                placeholder="Click to add text"
                className="popup-input"
                required
              ></textarea>
            )}
            {(popup.content.startsWith("Image") || 
              popup.content.startsWith("Video") || 
              popup.content.startsWith("GIF")) && (
              <textarea
                placeholder="Click to add link"
                className="popup-input"
                required
              ></textarea>
            )}
            {popup.content.startsWith("Input Buttons") && (
              <textarea
                placeholder="Click to add text"
                className="popup-input"
                required
              ></textarea>
            )}
            <button className="close-popup" onClick={() => closePopup(popup.id)}>
              Close
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
