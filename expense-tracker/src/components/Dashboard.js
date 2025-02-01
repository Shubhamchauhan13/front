import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate();
    const dologout = () =>{
        navigate("/");

    }
  return (
    <div>
         <button onClick={dologout}>Logout   
         </button>
    </div>
  )
}

export default Dashboard