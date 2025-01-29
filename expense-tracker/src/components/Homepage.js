import React from 'react'
import img1 from '../asset/img/WhatsApp Image 2025-01-25 at 21.14.44_2abff19d.jpg'

function Homepage() {
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
            <h2 style={{alignSelf:'center'}}>Register</h2>
            </div>
          
          <div>
            <label>
              Name
            </label>
            <input
              required
              type="text"
              placeholder='Enter your name'
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
            />
          </div>


          <div>
            <button>Submit</button>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Homepage