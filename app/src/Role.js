import React from 'react';
import { useNavigate } from 'react-router-dom';

const Role = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Select Your Role</h2>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => navigate('/register/user')}
            className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Register as User
          </button>
          <button
            onClick={() => navigate('/register/admin')}
            className="bg-green-500 text-white p-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Register as Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Role;
