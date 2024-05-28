import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../Assets/Logo2.png';
import Footer from '../../Components/Footer/Footer';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/login', { username, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/home');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='signup-background'>
      <div>
        <nav className='navbar-choose'>
          <div className='logo-head'>
            <img src={logo} alt="Logo" className='logo' />
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
          <h1>Login</h1>
          <div className='line-choose-signup'></div>
          <form onSubmit={handleSubmit}>
            <input 
              type='text' 
              placeholder='Enter Username' 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
              type='password' 
              placeholder='Enter Password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button type='submit' className='signup-btn'>Login</button>
          </form>
          <p>Don't have an account? <Link to="/choose" className='link-login'>Sign up</Link></p>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LoginPage;

