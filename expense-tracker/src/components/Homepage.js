import React,{useState} from 'react'
import img1 from '../asset/img/WhatsApp Image 2025-01-25 at 21.14.44_2abff19d.jpg'
import { Link, useNavigate} from 'react-router-dom'
function Homepage() {

 const navigate = useNavigate();
 const [inputs, setinputs] = useState({})
 const [showerror,setshowerror]=useState(false)
 const handlechange =(event)=>{
const name = event.target.name;
const value = event.target.value;
 setinputs(values => ({...values,[name] : value}))
 }


  const dologin = (event) => {
    event.preventDefault();
console.log("Clicked", inputs);
if(inputs.pass.length>=8){
  navigate("/dashboard");
}
else{
  setshowerror(true);
}

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

            <form onsubmit={dologin}>
          <div>
            <label>Email</label>
            <input
              required
              type="email"
              placeholder='Enter your Email'
              value={inputs.email||''}
              onchange={handlechange}
              name='email'
               />
         
          </div>
          <div>
            <label>Password</label>
            <input
              required
              type="password"
              placeholder='Enter your Password'
              value={inputs.pass || ''}
              onchange={handlechange}
              name='pass'
               />
             
          </div>
          {
            showerror?
          <div>
           <span style={{color:'red',alignSelf:'center'}}>password length must be greater then 8</span>
            </div> : null
}

          <div>
            <button>Login</button>
            </div>
            <div>
                <span style={{ alignSelf: 'center' }}>not a user ?<Link to="/register">Register</Link> </span>
              </div>
              </form>
          </div>
        </div>

      </div>
      )
}

      export default Homepage