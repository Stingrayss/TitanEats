import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignIn = () => {
    const { username, password } = formData;

    if (username === 'student' && password === 'password') {
      setError('');
      // Navigate to the RestaurantList page on successful login
      navigate('/restaurants');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="SignIn">
      <div className="SignIn-content">
        <h2>Sign In</h2>
        <div className="SignIn-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <button onClick={handleSignIn}>Sign In</button>

          {error && <p className="error-message">{error}</p>}
        </div>
        <div className="SignIn-links">
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
