import React from 'react'
import { Link } from 'react-router-dom'
import './PhotographerHome.css'
import Footer from '../../Components/Footer/Footer'

import logo from '../../Assets/Logo2.png'
import profile from '../../Assets/Profile.png'

const PhotographerHome = () => {

  return (
    <div>
      <div>
        <nav className='navbar-custom'>
          <div className='logo-head'>
            <img src={logo} alt="" className='logo'/>
            <div className='logo-text'>
              <h2>ShutterShare</h2>
              <p>Future Photography</p>
            </div>
          </div>
          
          <ul>
              <li><Link to="/photographer/home" className='action'>Home</Link></li>
              <li><Link to="/photographer/contact"  className='action'>Contacts</Link></li>
              <li><Link className='action'>Notifications</Link></li>
              <Link to="/" ><button className='basic-btn' >Log Out</button></Link>
              <img src={profile} alt='' className='profile-photo'/>
              
          </ul>
        </nav>

      </div>
      <div className='row'>
        <div className='leftcolumn'>
          <div className='L-card'>
            <div className='pic'>
              <div className='circle'>
                <img src={profile} alt=''/>
              </div>
            </div>
            <h3>Photographer Name</h3>
            <p>Short Description</p>
            <p>Ratings</p>
            <p>Availability</p>
          </div>
          <div className='L-card'>
            <div className='book'>
              <button >Booking Schedule</button>
            </div>
          </div>
          <div className='L-card'>
            <h4>Messages</h4>
            <hr></hr>
            <div className='messages-tab'>

            </div>
          </div>
        </div>


        <div className='rightcolumn'>
          <div className='R-card'>
            <h2>Photographer Name</h2>
            <div className='form-content'>
              <form>
                <label>Type</label>
                <input type='text' name='type'/>
                <label>Location</label>
                <input type='text' name='location'/>
                <label>Price</label>
                <input type='text' name='price'/>
              </form>
            </div>
          </div>
          <div className='R-card'>
            <h2>Description</h2>
            <form>
                <textarea rows={10} cols={50}/>  
              </form>
          </div>
          <div className='R-card'>
            <h2>Portfolio</h2>
            <div className='photo'>

            </div>
            <div className='add'>
              <button>Add Photos</button>
            </div>
          </div>
          <div className='R-card'>
            <h2>Other Contact Details</h2>
            <form className='contact-content'>
                <label>Email</label>
                <input type='text' name='email'/>
                <label>Contact Number</label>
                <input type='text' name='mobile'/>
                
              </form>
          </div>
          <div className='R-card'>
            <div className='save-btn'>
              <button>Save Changes</button>
            </div>
            
          </div>
        </div>


      </div> 
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default PhotographerHome
