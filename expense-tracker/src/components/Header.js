import React from 'react'
import Logo from '../asset/img/WhatsApp Image 2025-01-25 at 21.14.44_3eb76e5f.jpg'
import arrow from '../asset/img/downward.jpg'
import { useNavigate, useLocation } from 'react-router-dom'


function Header(){
    const navigate = useNavigate();
    const location = useLocation();
    console.log("MSG", location.pathname);
    return(
        <div className='header'>
            <div style={{ display:'flex', width:'90%',alignItems:'center'}}>
            <img src={Logo}/>
        <h2>Expense Tracker</h2>
        </div>
        {
            location.pathname === '/dashboard' ?
            <div style={{width:'10%',display:'flex',alignItems:'center'}}>
                <p className="dropbtn">User Name</p>
                  <div className="dropdown">
   <img style={{ width:'10px',heigth:'10px',marginleft:'10px'}} src={arrow}/>
    <div className="dropdown-content">
     <p>Change password</p>
     <p>logout</p>
    </div>
  </div>
            {/*<p>User Name</p>
            <img style={{width:'10px',heigth:'10px',marginLeft:'10px',alignItems:'center',marginTop:'5px'}} src={arrow}/>*/}
        </div>
        :
        null
        }
       
        </div>
        
    )
}

export default Header