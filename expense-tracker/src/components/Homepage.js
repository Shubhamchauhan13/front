import React from 'react'
import img1 from '../asset/img/WhatsApp Image 2025-01-25 at 21.14.44_2abff19d.jpg'
import { Link, useNavigate} from 'react-router-dom'
function Homepage() {
 const navigate = useNavigate();
  const dologin = ()=>{
console.log("Clicked");
navigate("/dashboard");
  }
  return (
    <div className='container'>
      <div className='leftcontainer'>
        <p>Welcome to expense tracker</p>
        <p>Manage all your expense here</p>
        <img src={img1} />
      </div>


      <div className='rightcontainer'>
        <div className='formcard'>
          <div>
            <h2 style={{ alignSelf: "center" }}>Login</h2></div>
          <div>
            <label>E-mail</label>
            <input
              required
              type="e-mail"
              placeholder='Enter your E-mail' />
          </div>
          <div>
            <label>Password</label>
            <input
              required
              type="password"
              placeholder='Enter your Password' />
          </div>

          <div>
            <button onClick={dologin}>Login   
            </button>
            </div>
            <div>
                <span style={{ alignSelf: 'center' }}>not a user ?<Link to="/register">Register</Link> </span>
              </div>
          </div>
        </div>

      </div>
      )
}

      export default Homepage