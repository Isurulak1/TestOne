import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/Logo2.png';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';
import './PhotographerSignup.css';

function PhotographerSignup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/api/photographer/register', { username, password, email, contactNumber })
      .then(result => {
        console.log(result);
        navigate('/photographer/home');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='signup-background'>
      <div>
        <nav className='navbar-choose'>
          <div className='logo-head'>
            <img src={logo} alt="logo" className='logo' />
            <div className='logo-text'>
              <h2>ShutterShare</h2>
              <p>Future Photography</p>
            </div>
          </div>
          <ul>
            <li><Link to="/" className='action'>Home</Link></li>
            <Link to="/login"><button className='basic-btn'>Login</button></Link>
            <Link to="/choose"><button className='basic-btn'>Signup</button></Link>
          </ul>
        </nav>
      </div>
      <div className='signup-section'>
        <div className='signup-info'>
          <h1>Sign Up</h1>
          <div className='line-choose-signup'></div>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)} />
            <input type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
            <input type='email' placeholder='Enter Email Address' onChange={(e) => setEmail(e.target.value)} />
            <input type='text' placeholder='Enter Contact Number' onChange={(e) => setContactNumber(e.target.value)} />
            <button type='submit' className='signup-btn'>Sign up</button>
          </form>
          <p>Already have an account? <Link to="/login" className='link-login'>Login</Link></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PhotographerSignup;

