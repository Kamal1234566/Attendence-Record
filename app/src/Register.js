import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
    address: '',
    role: 'user',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', formData);
      window.location = '/login';
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-5">Register</h2>
      <form onSubmit={handleSubmit}>
        <input className="mb-4 w-full p-2 border" type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input className="mb-4 w-full p-2 border" type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input className="mb-4 w-full p-2 border" type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input className="mb-4 w-full p-2 border" type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} />
        <input className="mb-4 w-full p-2 border" type="text" name="address" placeholder="Address" onChange={handleChange} />
        <select className="mb-4 w-full p-2 border" name="role" onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
