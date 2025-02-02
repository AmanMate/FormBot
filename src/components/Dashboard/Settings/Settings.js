import React, { useEffect, useState } from "react";
import { updateUser } from "../../../api/auth"; // Removed unused import getUserDetails
import { useNavigate } from "react-router-dom";
import "./Settings.css";
import User from "../../../assets/icons/Frame 1036.png";
import Email from "../../../assets/icons/mdi-light_email.png";
import Password from "../../../assets/icons/lock.png";
import View from "../../../assets/icons/view.png";
import Logout from "../../../assets/icons/Logout.png";

export default function Settings() {

  //Settings
  const [updateData, setUpdateData] = useState({
    name: "",
    oldName: "",
    email: "",
    oldEmail: "",
    oldPassword: "",
    newPassword: "",
  });
  
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  useEffect(() => {
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name")?.replace(/"/g, '');
    if (email && name) {
      setInputEmail(email);
      setInputName(name);
      setUpdateData((prevData) => ({
        ...prevData,
        oldEmail: email,
        oldName: name,
        name: name,
        email: email,
      }));
    }
  }, []);
  
  const handleUpdate = (event) => {
    setUpdateData({ ...updateData, [event.target.name]: event.target.value });
  };
  
  const handleUpdateSubmit = async () => {
    try {
      await updateUser(updateData);
      alert("User updated successfully");
      navigate("/login");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Error updating user");
    }
  };
  
  //Logout
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  
    const handleLogoutClick = () => {
      setShowPopup(true);
    };
  
    const handleCancelClick = () => {
      setShowPopup(false);
    };
  
    const handleConfirmLogout = () => {
      setShowPopup(false);
      navigate("/login");
    };


  return (
    <div className="settings">
        <div className="sett-text">
          <p>Settings</p>
        </div>
        <div className="allInputs">
          <div className="input-wrapper">
            <img src={User} alt="Name Icon" className="input-icon" />
            <input
              type="text"
              value={updateData.name}
              name="name"
              placeholder="Name"
              onChange={handleUpdate}
              />
          </div>
          <div className="input-wrapper">
            <img src={Email} alt="Email Icon" className="input-icon" />
            <input
              type="email"
              value={updateData.email}
              name="email"
              placeholder="Update Email"
              onChange={handleUpdate}
              />
          </div>
          <div className="input-wrapper">
            <img src={Password} alt="Old Password Icon" className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              name="oldPassword"
              placeholder="Old Password"
              onChange={handleUpdate}
            />
            <button
                  onClick={toggleShowPassword}
                  className="show-pass-old"
                >
                  <img src={View} />
                </button>
          </div>
          <div className="input-wrapper">
            <img src={Password} alt="New Password Icon" className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              name="newPassword"
              placeholder="New Password"
              onChange={handleUpdate}
            />
            <button
                  onClick={toggleShowPassword}
                  className="show-pass-new"
                >
                  <img src={View} />
                </button>
          </div>
        </div>
        <button className="updateBtn" onClick={handleUpdateSubmit}>
          Update
        </button>

        <div className="logout">
          <a className="logout submenu" onClick={handleLogoutClick}>
            <img src={Logout} alt="Logout" />
            <p className="logout-text">Logout</p>
          </a>

          {showPopup && (
            <div className="popup">
              <div className="popup-content">
                <p>Are you sure you want to Logout?</p>
                <button className="popup-confirm-button" onClick={handleConfirmLogout}>
                  Yes, Logout
                </button>
                <button className="popup-cancel-button" onClick={handleCancelClick}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
  );
}
