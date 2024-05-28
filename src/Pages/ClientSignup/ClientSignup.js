import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../Assets/Logo2.png'
import Footer from '../../Components/Footer/Footer'
import { useState } from 'react'
import axios from 'axios'

function ClientSignup() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

const handleSubmit = (e) => {
 e.preventDefault()
 axios.post('http://localhost:3002/register', {username,password})
.then(result => console.log(result))
.catch(err=> console.log(err))

};

  return (
    <div className='signup-background'>
      <div>
          <nav className='navbar-choose'>
                <div className='logo-head'>
                <img src={logo} alt="" className='logo'/>
                <div className='logo-text'>
                    <h2>ShutterShare</h2>
                    <p>Future Photography</p>
                </div>
                  
                </div>
                
                
                <ul>
                    <li><Link to="/" className='action'>Home</Link></li>
                    <Link to="/login" ><button className='basic-btn' >Login</button></Link>
                    <Link to="/choose" ><button className='basic-btn'>Signup</button></Link>
                </ul>

                

            </nav>
      </div>
          
      <div className='signup-section'>
        <div className='signup-info'>
            <h1>Sign Up</h1>
            <div onSubmit={handleSubmit} className='line-choose-signup'></div>
            <input type='text' placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)} />
            <input type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
            <Link to="/client/home"><button className='signup-btn'>Sign up</button></Link>
            <p>Already have an account. <Link to="/login" className='link-login'>Login</Link></p>
        </div>
           
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )

}
export default ClientSignup
