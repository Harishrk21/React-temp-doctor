import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DoctorDashboard from "./DoctorDashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoctorDashboard />} />
      
      </Routes>
    </Router>
  );
}

export default App;
