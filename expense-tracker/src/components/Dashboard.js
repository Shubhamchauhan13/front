import React, { useState } from 'react'
import img1 from '../asset/img/dashboard.jpg'
import { Link, useNavigate } from 'react-router-dom'
function Dashboard() {
  const myexpenses = [100,200,300,600,700,800]


  const navigate = useNavigate();
  const [inputs, setinputs] = useState({})
  const [showdata, setshowdata] = useState(false)
  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputs(values => ({ ...values, [name]: value }))

  }


  const addexpense = (event) => {
    event.preventDefault();
    console.log("Clicked", inputs);
    setshowdata(true)
  }

  return (
    <div className='container'>
      {showdata ?
        <div className='leftcontainer'>
          <p>Total expenses : 1000</p>
          {myexpenses.map((val) => 
          <div className='expensecard'>
            <p>Title</p>
            <p>Amount {val}</p>
            <p>Date</p>
            <p>Type</p>
             </div>
            )}
          </div>
          :
      <div className='leftcontainer'>
        <p>please add your expenses</p>
        <img src={img1} />
      </div>
}


      <div className='rightcontainer'>
        <div className='formcard'>
          <div>
            <h2 style={{ alignSelf: "center" }}>Add Expense</h2></div>

          <form onSubmit={addexpense}>
            <div>
              <label>Title</label>
              <input
                required
                type="text"
                placeholder='Enter your expense title'
                value={inputs.title || ''}
                onChange={handlechange}
                name='title'
              />

            </div>
            <div>
              <label>Amount</label>
              <input
                required
                type="number"
                placeholder='Enter your expense amount'
                value={inputs.expense || ''}
                onChange={handlechange}
                name='expense'
              />

            </div>
            <div>
              <label>select type</label>
              <select
                value={inputs.type||''}
                onChange={handlechange}
                name='type'
              >
                <option value="cash">Cash</option>
                <option value="upi">UPI</option>
                <option value="card">Card</option>
              </select>

            </div>
            <div>
              <label>date</label>
              <input
                required
                type="date"
                placeholder='Enter date'
                value={inputs.date || ''}
                onChange={handlechange}
                name='date'
              />

            </div>


            <div>
              <button>Add</button>
            </div>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Dashboard