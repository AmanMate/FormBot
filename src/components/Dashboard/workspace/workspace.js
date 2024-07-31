import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './workspace.css'; 

export default function Workspace() {
  const [isOpen, setIsOpen] = useState(false);
  const [folders, setFolders] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const navigate = useNavigate();

  const userName = localStorage.getItem("userName") || "User";

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setNewFolderName("");
  };

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      setFolders([...folders, newFolderName]);
      closePopup();
    }
  };

  const handleDeleteFolder = (folderName) => {
    setFolders(folders.filter(folder => folder !== folderName));
  };

  const handleCreateTypebot = () => {
    navigate("/flow");
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  return (
    <div className="workspace-container">
      <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
          {userName}'s workspace
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <a href="#settings" onClick={handleSettings}>Settings</a>
            <a href="#logout">Logout</a>
          </div>
        )}
      </div>

      <div className="folder-container">
        <button className="create-folder" onClick={openPopup}>
          Create a folder
        </button>

        {folders.map((folder, index) => (
          <div key={index} className="folder">
            {folder} 
            <button className="delete-folder" onClick={() => handleDeleteFolder(folder)}>Delete</button>
          </div>
        ))}
      </div>

      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Create New Folder</h2>
            <input 
              type="text" 
              value={newFolderName} 
              onChange={(e) => setNewFolderName(e.target.value)} 
              placeholder="Folder Name" 
            />
            <div className="popup-buttons">
              <button className="save-button" onClick={handleCreateFolder}>Save</button>
              <button className="cancel-button" onClick={closePopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <button className="create-typebot" onClick={handleCreateTypebot}>
        <span className="material-icons">+</span> Create a typebot
      </button>
    </div>
  );
}
