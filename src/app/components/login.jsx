// LoginPage.js

import React from 'react';
import 'tailwindcss/tailwind.css'; 

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <div className="text-center mb-8">
          <img
            src="https://siesgst.edu.in/images/sies_gst_logo.jpg"
            alt="Logo"
            className="mx-auto max-h-20"
          />
          <h2 className="text-2xl font-bold mt-4">Sign In</h2>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="PRN Number"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          
          <div className="flex items-center justify-center"> 
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
