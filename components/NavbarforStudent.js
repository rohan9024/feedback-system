// components/NavbarforStudents.js
"use client";
import React, { useState } from 'react';

const NavbarforStudents = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    // Implement sign-out logic here
    alert('Signing out...');
  };

  return (
    <nav className="flex justify-between items-center bg-white text-gray-700 p-4">
      <div className="flex items-center">
        <img src="/SIES_logo.png" alt="Logo" className="logo w-30 h-20 mr-4" />
        <span>Feedback System</span>
      </div>
      <div className="account-dropdown relative cursor-pointer" onClick={toggleDropdown}>
        My Account
        {isDropdownOpen && (
          <div className="dropdown-content absolute top-full right-0 bg-white shadow-lg p-4 rounded">
            <p className="mb-2"><strong>Name:</strong> [User Name]</p>
            <p className="mb-2"><strong>Department:</strong> [User Department]</p>
            <p className="mb-2"><strong>Year:</strong> [User Year]</p>
            <button onClick={handleSignOut} className="sign-out-button bg-red-500 text-white px-4 py-2 rounded mt-2">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarforStudents;
