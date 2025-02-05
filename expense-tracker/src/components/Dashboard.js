import React,{useState} from 'react'
import img1 from '../asset/img/dashboard.jpg'
import { Link, useNavigate} from 'react-router-dom'
function Dashboard() {

 const navigate = useNavigate();
 const [inputs, setinputs] = useState({})
 const [showerror,setshowerror]=useState(false)
 const handlechange =(event)=>{
const name = event.target.name;
const value = event.target.value;
 setinputs(values =>({...values,[name]:value}))

 }


  const dologin = (event)=>{
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
        <p>please add your expenses</p>
        <img src={img1} />
      </div>


      <div className='rightcontainer'>
        <div className='formcard'>
          <div>
            <h2 style={{ alignSelf: "center" }}>Add Expense</h2></div>

            <form onsubmit={dologin}>
          <div>
            <label>E-mail</label>
            <input
              required
              type="e-mail"
              placeholder='Enter your E-mail'
              value={inputs.email||''}
              onChange={handlechange}
              name='email'
               />
         
          </div>
          <div>
            <label>Password</label>
            <input
              required
              type="password"
              placeholder='Enter your Password'
              value={inputs.pass||''}
              onChange={handlechange}
              name='pass'
               />
             
          </div>
          {
            showerror ? 
          <div>
           <span style={{color:'red',alignSelf:'center'}}>Password length must be greater then 8</span>
            </div> : null
}

          <div>
            <button>Add</button>
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

      export default Dashboard