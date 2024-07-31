import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing"
import Login from "./pages/Login&Register/LoginPage";
import WorkspacePage from "./pages/Dashboard/workspace/workspace"
import Settings from "./components/Dashboard/Settings/Settings";
import FlowPage from "./pages/Dashboard/workspace/Flow/Flow";
import ThemePage from "./pages/Dashboard/workspace/Themes/Theme";
import ResponsePage from "./pages/Dashboard/workspace/Response/Response";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<WorkspacePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/flow" element={<FlowPage />} />
        <Route path="/theme" element={<ThemePage />} />
        <Route path="/response" element={<ResponsePage />} />
      </Routes>
    </Router>
  );
}

export default App;
