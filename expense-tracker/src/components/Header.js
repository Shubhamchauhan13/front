import React, { useState } from 'react'
import Logo from '../asset/img/WhatsApp Image 2025-01-25 at 21.14.44_3eb76e5f.jpg'
import arrow from '../asset/img/downward.jpg'
import { useNavigate, useLocation } from 'react-router-dom'


function Header(){
    const navigate = useNavigate();
    const location = useLocation();
    const doLogout =()=>{
        navigate('/');
    }

    
  const [inputs, setInputs] = useState({})
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const dochangePass = (event) => {
    event.preventDefault();
    console.log("clicked", inputs);
    closeModal();
  }

  //var modal = document.getElementById("changepass");

  const openModal = () => {
    var modal1 = document.getElementById("changepass");
    console.log("done", modal1, modal1.style)
    modal1.style.display = "block";
  }

  const closeModal = () => {
    var modal1 = document.getElementById("changepass");
    console.log("done", modal1, modal1.style)
    modal1.style.display = "none";
  }
    console.log("MSG", location.pathname);
    return(
        <div className='header'>
            <div style={{ display:'flex', width:'90%',alignItems:'center'}}>
            <img src={Logo}/>
        <h2>Expense Tracker</h2>
        </div>
        <div id="changepass" className="modal">
        <div className="modal-content">
          <form onSubmit={dochangePass}>
            <div>
            <label>
                Old password
              </label>
              <input required
                type="text"
                placeholder='Enter your Old Password'
                value={inputs.currPass || ''}
                onChange={handleChange}
                name='currPass'
              />
            </div>

            <div>
              <label>
                New Password
              </label>
              <input required
                type="text"
                placeholder='Enter your New Password'
                value={inputs.newPass || ''}
                onChange={handleChange}
                name='newPass'
              />
            </div>

            <div>
              <label>
                Confirm Password
              </label>
              <input required
                type="text"
                placeholder='Confirm Your Password'
                value={inputs.cnfPass || ''}
                onChange={handleChange}
                name='cnfPass'
              />
            </div>


            <div className='modal-header'>
              <button>Submit</button>
            </div>

            <div className='modal-header'>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </form>

        </div>
      </div>



        {
            location.pathname === '/dashboard' ?
            <div style={{width:'10%',display:'flex',alignItems:'center'}}>
                <p className="dropbtn">User Name</p>
                 
                  <div className="dropdown">
   <img style={{ width:'10px',heigth:'10px',marginleft:'10px'}} src={arrow}/>
    <div className="dropdown-content">
     <p onClick={openModal}>Change password</p>
     <p onClick={doLogout}>logout</p>
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