import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';


function Login() {
  const [formData, setFormData] = useState({
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

    // Checking that both email and password are provided or not
    if(!formData.email) {
      // alert("Please provide your email");
      return;
    }

    if(!formData.password) {
      // alert("Please provide your passsword");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5619/login', formData);
        console.log("object", response.data);
      // Redirect to home screen after successful login
      if (response.data && response.data.user) {
        enqueueSnackbar('Logged in successfully.', { variant: 'success' });
        navigate('/home');
      }
    } catch (error) {
      console.error('Login failed:', error);
      enqueueSnackbar('Login failed!', { variant: 'error' });
      // Handle error, show message, etc.
    }
  };

  return (
    <div className="flex h-screen">
      <div className="m-auto w-full max-w-sm">
        <div className="bg-slate-300 p-8 rounded-lg shadow-md">
          <h1 className="text-5xl font-semibold mb-12 text-center text-slate-800">Login</h1>
          <form onSubmit={handleSubmit}>
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
            <div className="mb-4">
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
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-slate-800">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-slate-500 hover:underline">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              id="loginBtn"
              className="w-full bg-slate-600 text-white p-2 rounded-md hover:bg-slate-700"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-slate-800">
            Don't have an account?{' '}
            <Link to="/signup" className="text-slate-500 hover:underline font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
