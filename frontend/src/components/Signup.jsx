import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';


function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { enqueueSnackbar } = useSnackbar();


  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5619/user', formData);

      // Redirect to login page after successful signup
      if (response.data) {
        enqueueSnackbar('Signed up successfully.', { variant: 'success' });
        navigate('/');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      enqueueSnackbar('Sign up failed!', { variant: 'error' });
      // Handle error, show message, etc.
    }
  };

  return (
    <div className="flex h-screen">
      <div className="m-auto w-full max-w-sm">
        <div className="bg-slate-300 p-8 rounded-lg shadow-md">
          <h1 className="text-5xl font-semibold mb-12 text-center text-slate-800">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md text-slate-950"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md text-slate-950"
                placeholder="E-mail"
              />
            </div>
            <div className="mb-7">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md text-slate-950"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              id="signUpBtn"
              className="w-full bg-slate-600 text-white p-2 rounded-md hover:bg-slate-700"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-slate-800">
            Already have an account?{' '}
            <Link to="/" className="text-slate-500 hover:underline font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
