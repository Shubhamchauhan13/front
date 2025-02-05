import React, { useEffect, useState } from 'react'
import '../asset/css/register.css' 
import { Link, useNavigate} from 'react-router-dom'

function Register() {
 
   const [input, setinput] = useState({})
    const navigate = useNavigate();
   const handlechange =(event)=>{
  const name = event.target.name;
  const value = event.target.value;
   setinput(values =>({...values,[name]:value}))
  
   }
  
    const doregister = (event)=>{
      Event.preventDefault();
  console.log("Clicked", input);
  navigate("/dashboard");
 
    }
  return ( 
    <div className='mainContainer'>

      <div className='formcard'>
    <div>
      <h2 style={{alignSelf:'center'}}>Register</h2>
      </div>
    
    <form onsubmit={doregister}>
    <div>
      <label>
        Name
      </label>
      <input
        required
        type="text"
        placeholder='Enter your name'
        value={input.name||''}
        onchange={handlechange}
        name='name'
      />
    </div>

    <div>
      <label>
        Email
      </label>
      <input
        required
        type="email"
        placeholder='Enter your email'
        value={input.email||''}
        onchange={handlechange}
        name='email'
      />
    </div>

    <div>
      <label>
        Password
      </label>
      <input
        required
        type="password"
        placeholder='Enter your password'
        value={input.pass||''}
        onchange={handlechange}
        name='pass'
      />
    </div>

    <div>
      <label>
        Confirm Password
      </label>
      <input
        required
        type="password"
        placeholder='Enter your confirm password'
        value={input.cnfpass||''}
        onchange={handlechange}
        name='cnfpass'
      />
    </div>


    <div>
      <button>Submit</button>
    </div>

    <div>
                <span style={{ alignSelf: 'center' }}>Already a user login ?<Link to="/">login</Link> </span>
              </div>
              </form>

  </div>
  </div>
  )
}

export default Register