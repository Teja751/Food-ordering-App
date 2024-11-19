import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './LoginPage.css';

// Sample registered users (You can replace this with an API call)
const registeredUsers = [
  { email: 'user@example.com', password: 'password123' },
  { email: 'admin@example.com', password: 'admin123' },
  // Add more registered users here
];

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the entered email and password match any of the registered users
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // If the user is found, redirect to home page (or wherever you need)
      navigate('/');
    } else {
      // Show error message if credentials are invalid
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login to Your Account</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');  // Clear error message while typing
            }}
            required
            placeholder="Enter your email"
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');  // Clear error message while typing
            }}
            required
            placeholder="Enter your password"
            className="input-field"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-button">Login</button>
      </form>

      <p className="register-link">
        Don't have an account? <Link to="/register">Register Now</Link>
      </p>
    </div>
  );
};

export default LoginPage;
