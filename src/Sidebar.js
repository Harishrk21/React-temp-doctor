import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header mb-4">
        <h4>MIOT DOCTOR</h4>
      </div>
      <ul className="list-unstyled">
        <li className="mb-3">
          <a href="#" className="text-white text-decoration-none">Dashboard</a>
        </li>
        <li className="mb-3">
          <a href="#" className="text-white text-decoration-none">Appointments</a>
        </li>
        <li className="mb-3">
          <a href="#" className="text-white text-decoration-none">View Patients</a>
        </li>
        <li className="mb-3">
          <a href="#" className="text-white text-decoration-none">My Profile</a>
        </li>
        <li>
          <a href="#" className="text-white text-decoration-none">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
