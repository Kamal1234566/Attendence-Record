import React, { useState } from 'react';
import axios from 'axios';

const Log = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username });
      setUserData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-5">Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="mb-4 w-full p-2 border" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">Login</button>
      </form>

      {userData && (
        <div className="mt-5">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Mobile:</strong> {userData.mobile}</p>
          <p><strong>Address:</strong> {userData.address}</p>
        </div>
      )}
    </div>
  );
};

export default Log;
